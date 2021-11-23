import React from 'react';
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  // Icon,
  Tooltip,
  Link
} from '@chakra-ui/react';
// import { FaInfo } from 'react-icons/fa';

export default function Tokencard({nft}) {

  return (
    <Box maxW="200px" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image 
        src={"https://gateway.pinata.cloud/ipfs/QmTfgGBcGVbZGk38jfT4rZhQAEtu3j7jwQkZE5E6ij39S2"} 
        alt={"panda"} 
      />

      <Box p="6">
        <Box display="flex" alignItems="baseline" flexDirection="column">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="narrrow"
            fontSize="7px"
            textTransform="uppercase"
            ml="2"
          >
            owner: {nft._to}
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          caracteristicas
        </Box>

        <Box>
          {nft._metadata}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>
      </Box>
    </Box>
  )
}