"use client";

import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { ArrowIcon } from "@/components/icons";

// map short gamemode codes to full-length labels
const gmCodeMap = {
  cp: "Competitive",
  cs: "Casual",
  wm: "Wingman",
  fs: "Flying Scoutsman",
  ar: "Arms Race",
  dm: "Deathmatch",
  dl: "Demolition"
};

export const GamemodeModal = ({isOpen, onOpenChange, gamemodes}) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} classNames={{footer: "justify-start"}}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Select a gamemode to host</ModalHeader>
            <ModalBody>
              {gamemodes.map((gmCode) =>
                <div className="flex gap-4 items-center">
                  <Button endContent={<ArrowIcon />} className="bg-gradient-to-tr from-[#e11cff] to-[#b249f8]">
                    {gmCodeMap[gmCode]}
                  </Button>
                </div>
              )}
            </ModalBody>
            <ModalFooter>
              <div className="flex gap-4 items-center">
                <Button onPress={onClose} className="bg-gradient-to-bl from-[#ED213A] to-[#93291E]">
                  Cancel
                </Button>
              </div>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
