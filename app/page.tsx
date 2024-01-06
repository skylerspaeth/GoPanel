"use client";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

const maps = [
  {
    title: "Nuke",
    mapfile: "de_nuke.png",
    author: "Valve"
  },
  {
    title: "Cobblestone",
    mapfile: "de_cbble.png",
    author: "Valve"
  },
  {
    title: "Cache",
    mapfile: "de_cache.png",
    author: "FM Pone"
  },
  {
    title: "Inferno",
    mapfile: "de_inferno.png",
    author: "Valve"
  },
];

export default function Home() {
	return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-2">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title({size: "sm"})}>Welcome to&nbsp;</h1>
          <h1 className={title({ size: "sm", color: "violet" })}>GoPanel</h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            Start by selecting a map to host on the server.
          </h2>
        </div>
      </section>
      <section className="py-6">
        <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
          {maps.map((item, index) => (
            <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  className="w-full object-cover h-[140px]"
                  src={"/images/" + item.mapfile}
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{item.title}</b>
                <p className="text-default-500">{item.author}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
	);
}
