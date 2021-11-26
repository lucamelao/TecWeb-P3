import React from 'react';
import { connect } from 'react-redux'
import { accountLoadedSelector, accountSelector } from '../store/selectors'
import ConnectButton from './ConnectButton'
import AccountModal from "./AccountModal"
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

function NavBar({ accountLoaded, account }) {

    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <>
        <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={"center"}>
              <Box>NFT Creator</Box>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                <Link
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "gray.700"),
                  }}
                  href="/"
                >
                  Home
                </Link>
                <Link
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "gray.700"),
                  }}
                  href="/myTokens"
                >
                  Your tokens
                </Link>
              </HStack>
            </HStack>
            {accountLoaded ? (
              <div>
                <ConnectButton handleOpenModal={onOpen} account={account}/>
                <AccountModal isOpen={isOpen} onClose={onClose} account={account} />
              </div>
            ): <div></div>
            }
          </Flex>
        </Box>
      </>
    );
  }

function mapStateToProps(state) {
  return {
    accountLoaded: accountLoadedSelector(state),
    account: accountSelector(state)
  }
}
  
export default connect(mapStateToProps)(NavBar)