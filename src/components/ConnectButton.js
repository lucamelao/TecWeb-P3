import React, { useEffect } from "react";
import { Button, Box, Text } from "@chakra-ui/react";
import { connect } from 'react-redux'
import { accountLoadedSelector } from '../store/selectors'
import web3 from 'web3'

function ConnectButton({ handleOpenModal, account, accountLoaded}) {

    const etherBalance = 0

	return (
		<Box
			display="flex"
			alignItems="center"
			background="gray.700"
			borderRadius="xl"
			py="0"
		>
			<Box px="3">
				<Text color="white" fontSize="md">
					{etherBalance && parseFloat(etherBalance).toFixed(3)} ETH
				</Text>
			</Box>
			<Button
				onClick={handleOpenModal}
				bg="gray.800"
				border="1px solid transparent"
				_hover={{
					border: "1px",
					borderStyle: "solid",
					borderColor: "blue.400",
					backgroundColor: "gray.700",
				}}
				borderRadius="xl"
				m="1px"
				px={3}
				height="38px"
			>
				<Text color="white" fontSize="md" fontWeight="medium" mr="2">
					{account &&
						`${account.slice(0, 6)}...${account.slice(
							account.length - 4,
							account.length
						)}`}
				</Text>
			</Button>
		</Box>
	)
}

function mapStateToProps(state) {
    return {
      accountLoaded: accountLoadedSelector(state)
    }
  }
    
  export default connect(mapStateToProps)(ConnectButton)