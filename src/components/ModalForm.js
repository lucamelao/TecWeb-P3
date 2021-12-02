import React, { useState } from "react";
import { connect } from 'react-redux'

import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input
  } from "@chakra-ui/react";

const ModalForm = ( {details, setDetails, loading} ) => {
    return(
    <FormControl id="info">
      <FormLabel>Name</FormLabel>
        <Input type="name" value={details.name} onChange={e =>  {
          setDetails(prev=>{
            return {...prev, name : e.target.value}
          })
        }} 
        />
        <FormHelperText>you wont be able to change it</FormHelperText>
      <FormLabel>Description</FormLabel>
        <Input type="name" value={details.description} onChange={e =>  {
          setDetails(prev=>{
            return {...prev, description : e.target.value}
          })
        }} 
        />
        <FormHelperText>you wont be able to change it</FormHelperText>
    </FormControl>
    )
}

function mapStateToProps(state) {
    return {
    }
  }
  
export default connect(mapStateToProps)(ModalForm)