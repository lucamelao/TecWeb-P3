import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import ModalForm from "./ModalForm"
import Dropzone from "./Dropzone"
import File from "./File"
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
import { createToken } from "../store/interactions"
import { accountSelector , nftMarketSelector, nftCreatedSelector} from "../store/selectors";
import "./css/modal.css";
import keys from "../pinata"
const pinataSDK = require('@pinata/sdk');


function CreateModal( { account, nftMarket, nftCreated } ) {

    const dispatch = useDispatch()

    const navigate = useNavigate();

    const pinata = pinataSDK(keys.APIKey, keys.APISecret);

    // const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false)

    const [cid, setCid] = useState("");

    const [details, setDetails] = useState({
      name: "",
      description: "",
  })
    
    const { isOpen, onOpen, onClose } = useDisclosure()

    const onSubmit = () => {
      setLoading(true)
      createToken(nftMarket, pinata, cid ,details, account, dispatch)
    }

    useEffect(()=> {
      nftCreated && navigate("/")
    }, [nftCreated] )

    return (
      <>
        <Button onClick={onOpen}> New NFT</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your NFT</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* <Dropzone files={files} setFiles={setFiles} /> */}
              {loading ? (
                <div class="loadercont">
                  <div class="loader"></div>
                </div>
              ) :
                (<div>
                <File cid={cid} setCid={setCid} />
                <ModalForm details={details} setDetails={setDetails} loading={loading} />
                </div>)
              }
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button onClick={onSubmit} variant="ghost">Create NFT</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

function mapStateToProps(state) {
  return {
    account: accountSelector(state),
    nftMarket: nftMarketSelector(state),
    nftCreated: nftCreatedSelector(state)
  }
}

export default connect(mapStateToProps)(CreateModal)