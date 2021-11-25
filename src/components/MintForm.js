import React, { useState, useEffect } from 'react';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input
} from '@chakra-ui/react';

export default function MintForm() {

  return (
      <FormControl>
        <FormLabel>name</FormLabel>
        <Input type="name" />
      </FormControl>
  )
}