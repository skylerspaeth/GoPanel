// RCON
import Rcon from "rcon";
var options = {
  tcp: true,       // false for UDP, true for TCP (default true)
  challenge: false  // true to use the challenge protocol (default true)
};

var rconClient = new Rcon('hostname here', 27015, 'password here', options);

rconClient.on('auth', function() {
  console.log("Authenticated to RCON server:");
  rconClient.send("status");
}).on('response', function(str) {
  if (str.trim().length !== 0) console.log("Response: " + str);
}).on('error', function(err) {
  console.log("Error: " + err);
}).on('end', function() {
  console.log("Connection to RCON server closed");
  process.exit();
});

rconClient.connect();

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const map = searchParams.get('map');
  const gamemode = searchParams.get('gamemode');

  if (map == null && gamemode == null) {
    return new Response("ERROR: Missing parameter(s). You must supply both 'map' and 'gamemode'.", { status: 422 })
  } else if (!rconClient.hasAuthed) {
    return new Response("ERROR: API server is not authenticated to RCON server. Try again shortly or check API server logs.", { status: 503 })
  } else {
    console.log(`Running following RCON command: "map ${map} ${gamemode}"`);
    rconClient.send(`map ${map} ${gamemode}`);

    return new Response("Requested map and gamemode change.", { status: 200 })
  }
}
