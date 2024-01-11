export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const map = searchParams.get('map');
  const gamemode = searchParams.get('gamemode');

  console.log("Would run the RCON commands here to:");
  console.log(`start map '${map}' in gamemode '${gamemode}'`);
  return new Response("requested", { status: 200 })
}
