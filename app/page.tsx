"use client";
import { useState } from "react";
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code"
import { Card, CardBody, CardFooter, Image, useDisclosure } from "@heroui/react";
import { button as buttonStyles } from "@heroui/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

import { GamemodeModal } from "@/components/gamemode-modal";

import { officialMaps } from "./official-maps";
import { workshopMaps } from "./workshop-maps";

export default function Home({ filters, setNumMapsShown }) {
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

  // realtime array of filtered maps
  const filteredMaps = (filters.source == "official" ? officialMaps : workshopMaps).filter((map) => map.title.toLowerCase().includes(filters.name));

  // total number of maps that are being displayed on screen
  setNumMapsShown(filteredMaps.length);

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
          {filteredMaps.map((item, index) => (
            <Card
              className="transform transition-transform ease-out hover:scale-105 duration-200"
              disableAnimation // needed in order to supply custom animation above
              shadow="sm"
              key={index}
              isPressable
              onPress={() => { setSelectedMap(item); openGmModal() }}
            >
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  className="w-full object-cover"
                  src={filters.source == "official" ? `/images/${item.filename}.png` : item.image}
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{item.title}</b>
                <p className="text-default-500">{item.creator}</p>
              </CardFooter>
            </Card>
          ))}
          <GamemodeModal isOpen={gmModalIsOpen} onOpenChange={onGmModalChange} mapInfo={selectedMap}/>
        </div>
      </section>
    </>
	);
}
