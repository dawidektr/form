import {
  FormLabel,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/react';
import { useField } from 'react-final-form';
import Control from './Control';
import Error from './Error';

const SliderControl = ({ name, label }) => {
  const { input, meta } = useField(name);
  return (
    <Control name={name} my={4}>
      <FormLabel mt={5} fontSize={'2xl'} textAlign={'center'} htmlFor={name}>
        {label}
      </FormLabel>
      <Slider
        mt={5}
        {...input}
        defaultValue={1}
        min={1}
        max={10}
        step={1}
        isInvalid={meta.error && meta.touched}
      >
        <SliderMark
          {...input}
          textAlign="center"
          bg="blue.500"
          color="white"
          mt="-10"
          ml="-5"
          w="12"
        >
          {input.value}
        </SliderMark>
        <SliderTrack bg="red.100">
          <SliderFilledTrack bg="tomato" />
        </SliderTrack>
        <SliderThumb boxSize={6} />
      </Slider>
      <Error name={name} />
    </Control>
  );
};

export default SliderControl;
