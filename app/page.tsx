"use client";
import { useState } from "react";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { Card, CardBody, CardFooter, Image, useDisclosure } from "@nextui-org/react";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

import { GamemodeModal } from "@/components/gamemode-modal";

import { officialMaps } from "./official-maps";

export default function Home() {
  // destructure and rename keys for gamemode selection modal
  const {
    isOpen: gmModalIsOpen,
    onOpen: openGmModal,
    onOpenChange: onGmModalChange
  } = useDisclosure();

  // track supported gamemodes for requested map
  const [gamemodes, setGamemodes] = useState([]);

  // track selected map
  const [selectedMap, setSelectedMap] = useState({});

	return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-2">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title({ size: "sm" })}>Welcome to&nbsp;</h1>
          <h1 className={title({ size: "sm", color: "violet" })}>GoPanel</h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            Start by selecting a map to host on the server.
          </h2>
        </div>
      </section>
      <section className="py-6">
        <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
          {officialMaps.map((item, index) => (
            <Card shadow="sm" key={index} isPressable onPress={() => { setSelectedMap(item); openGmModal() }}>
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  className="w-full object-cover h-[140px]"
                  src={`/images/${item.mapfile}.png`}
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{item.title}</b>
                <p className="text-default-500">{item.author}</p>
              </CardFooter>
            </Card>
          ))}
          <GamemodeModal isOpen={gmModalIsOpen} onOpenChange={onGmModalChange} mapInfo={selectedMap}/>
        </div>
      </section>
    </>
	);
}
