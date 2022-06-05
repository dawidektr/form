import { FormLabel, NumberInput, NumberInputField } from '@chakra-ui/react';
import { useField } from 'react-final-form';
import Control from './Control';
import Error from './Error';

const NumberControl = ({ name, label, precision = 0 }) => {
  const { input, meta } = useField(name);
  return (
    <Control name={name} my={4}>
      <FormLabel textAlign={'center'} fontSize={'2xl'} htmlFor={name}>
        {label}
      </FormLabel>
      <NumberInput min={0} precision={precision}>
        <NumberInputField
          {...input}
          isInvalid={meta.error && meta.touched}
          id={name}
          placeholder={label}
        />
      </NumberInput>
      <Error name={name} />
    </Control>
  );
};

export default NumberControl;
