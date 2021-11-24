import React, { useEffect, useState } from "react";
import { Button, Box, Text } from "@chakra-ui/react";
import { connect } from 'react-redux'
import { web3ConnectionSelector } from '../store/selectors'

function ConnectButton({ handleOpenModal, account, web3}) {

	const [balance, setBalance] = useState(0)


	useEffect(() => {
		web3.eth.getBalance(account, (err, bal) =>{setBalance(web3.utils.fromWei(bal))})
	}, [])

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
					{balance && parseFloat(balance).toFixed(3)} ETH
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
	  web3: web3ConnectionSelector(state)
    }
  }
    
  export default connect(mapStateToProps)(ConnectButton)