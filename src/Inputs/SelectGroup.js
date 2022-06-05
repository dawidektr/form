import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
} from '@chakra-ui/react';

const SelectGroup = ({ input, meta, label, children }) => (
  <FormControl isInvalid={meta.touched && meta.invalid} my={4}>
    <FormLabel fontSize={'2xl'} textAlign={'center'} htmlFor={input.name}>
      {label}
    </FormLabel>
    <Select {...input}>{children}</Select>
    <FormErrorMessage>{meta.error}</FormErrorMessage>
  </FormControl>
);
export default SelectGroup;
