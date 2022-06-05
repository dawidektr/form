import { FormLabel, Input } from '@chakra-ui/react';
import { useField } from 'react-final-form';
import Control from './Control';
import Error from './Error';

const InputControl = ({ name, label }) => {
  const { input, meta } = useField(name);
  return (
    <Control name={name} my={4}>
      <FormLabel fontSize={'2xl'} textAlign={'center'} htmlFor={name}>
        {label}
      </FormLabel>
      <Input
        variant={'filled'}
        {...input}
        isInvalid={meta.error && meta.touched}
        id={name}
        placeholder={label}
      />
      <Error name={name} />
    </Control>
  );
};

export default InputControl;
