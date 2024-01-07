"use client";

import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, RadioGroup, Radio, cn } from "@nextui-org/react";
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

export const GamemodeModal = ({isOpen, onOpenChange, gamemodes, label}) => {
  const [goActive, setGoActive] = useState(false);

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onClose={() => setGoActive(false)}
      classNames={{header: "pb-2", footer: "justify-start"}}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-foreground-500">Select a gamemode to host</ModalHeader>
            <ModalBody>
              <RadioGroup color="secondary" onChange={() => setGoActive(true)}>
                {gamemodes.map((gmCode) =>
                  <Radio
                    value={gmCodeMap[gmCode]}
                    classNames={{base: cn(
                      "w-full max-w-full inline-flex m-0 bg-content1 hover:bg-content2 items-center",
                      "group active:opacity-50 flex-row-reverse justify-between tap-highlight-transparent",
                      "cursor-pointer border-2 border-default rounded-lg gap-4 p-4",
                      "data-[selected=true]:border-secondary",
                    )}}
                  >
                    {gmCodeMap[gmCode]}
                  </Radio>
                )}
              </RadioGroup>
              <p className="text-default-500 text-small">{label}</p>
            </ModalBody>
            <ModalFooter>
              <div className="flex gap-4 items-center w-full">
                <Button isDisabled={!goActive} onPress={onClose} className="text-md w-full bg-gradient-to-tr from-[#006734] to-[#00a24f]">
                  Go
                </Button>
              </div>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
