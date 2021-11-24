import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Image,
  Badge,
} from '@chakra-ui/react';
// import { FaInfo } from 'react-icons/fa';

export default function Tokencard({nft}) {

  const getURl = (str) => {
    var n = str.lastIndexOf('/');
    var result = str.substring(n + 1);
    return result
  }

  const [name, setName] = useState("")
  const [img, setImg] = useState("")

  useEffect(()=> {
    const url = getURl(nft._metadata)
    axios.get(`https://gateway.pinata.cloud/ipfs/${url}`)
    .then(res => {
      setName(res.data.name)
      setImg(getURl(res.data.image))
    }
    )
  }, [])

  return (
    <Box maxW="200px" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image 
        src={`https://gateway.pinata.cloud/ipfs/${img}`} 
        alt={"panda"} 
      />

      <Box p="3">
        <Box display="flex" alignItems="baseline" >
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            display="flex"
            flexWrap="wrap"
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="narrrow"
            fontSize="7px"
            textTransform="uppercase"
            ml="2"
          >
            owner: {nft._to &&
                  `${nft._to.slice(0, 6)}...${nft._to.slice(
                    nft._to.length - 4,
                    nft._to.length
                  )}`}
          </Box>
        </Box>

        <Box>
          {name}
        </Box>
      </Box>
    </Box>
  )
}