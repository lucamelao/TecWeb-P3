import React, { useState } from "react";
import ModalForm from "./ModalForm"
import Dropzone from "./Dropzone"
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  ModalFooter
} from "@chakra-ui/react";
import { ExternalLinkIcon, CopyIcon } from "@chakra-ui/icons";

export default function CreateModal() {
    const [files, setFiles] = useState([]);
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}> New NFT</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your NFT</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Dropzone files={files} setFiles={setFiles} />
              <ModalForm />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Create NFT</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }