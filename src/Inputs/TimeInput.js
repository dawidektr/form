import { Box, FormLabel, Input } from '@chakra-ui/react';
import { useField } from 'react-final-form';
import Control from './Control';
import Error from './Error';

const TimeInput = ({ name, label }) => {
  const { input, meta } = useField(name);
  return (
    <Control name={name} my={4}>
      <FormLabel fontSize={'2xl'} textAlign={'center'} htmlFor={name}>
        {label}
      </FormLabel>
      <Box textAlign={'center'}>
        <Input
          w={'50'}
          type={'time'}
          step={'1'}
          {...input}
          isInvalid={meta.error && meta.touched}
          id={name}
          placeholder={label}
        />
        <Error name={name} />
      </Box>
    </Control>
  );
};

export default TimeInput;
