import React, { useState } from 'react';
import axios from 'axios';

import { Box, Button, ButtonGroup, Text } from '@chakra-ui/react';
import { Form, Field } from 'react-final-form';
import validate from './validate';

import SelectGroup from './Inputs/SelectGroup';
import InputControl from './Inputs/InputControl';
import TimeInput from './Inputs/TimeInput';
import Condition from './Inputs/Condition';
import NumberControl from './Inputs/NumberControl';
import SliderControl from './Inputs/SliderControl';

const FinalForm = () => {
  const [submitError, setSubmitError] = useState('');
  const [responseData, setResponseData] = useState('');

  const onSubmit = async values => {
    let data;
    if (values.type === 'pizza') {
      data = {
        name: values.name,
        preparation_time: values.preparation_time,
        type: values.type,
        no_of_slices: parseInt(values.no_of_slices),
        diameter: parseFloat(values.diameter),
      };
    } else if (values.type === 'soup') {
      data = {
        name: values.name,
        preparation_time: values.preparation_time,
        type: values.type,
        spiciness_scale: parseInt(values.spiciness_scale),
      };
    } else {
      data = {
        name: values.name,
        preparation_time: values.preparation_time,
        type: values.type,
        slices_of_bread: parseInt(values.slices_of_bread),
      };
    }

    try {
      const response = await axios({
        method: 'post',
        url: 'https://frosty-wood-6558.getsandbox.com:443/dishes',
        data,
      });
      setResponseData(response.data);
    } catch (err) {
      const { response } = err;
      console.log(response);
      setSubmitError(response.data);
    }
  };

  return (
    <Box w={500} p={10} m="20px auto">
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({
          handleSubmit,
          form,
          errors,
          submitting,
          pristine,
          values,
        }) => (
          <Box
            as="form"
            p={4}
            rounded="lg"
            border={'white 5px solid'}
            onSubmit={handleSubmit}
          >
            <InputControl name="name" label="Name" />
            <TimeInput name="preparation_time" label="Preparation time" />

            <Field name="type" component={SelectGroup} label="Type">
              <option></option>
              <option value="pizza" color="red">
                pizza
              </option>
              <option value="soup" color="green">
                soup
              </option>
              <option value="sandwich" color="blue">
                sandwich
              </option>
            </Field>
            <Condition when="type" is="pizza">
              <NumberControl name="no_of_slices" label="Number of slices" />
              <NumberControl name="diameter" label="Diameter" precision={2} />
            </Condition>
            <Condition when="type" is="soup">
              <SliderControl name="spiciness_scale" label="Spiciness scale" />
            </Condition>
            <Condition when="type" is="sandwich">
              <NumberControl name="slices_of_bread" label="Slices of bread" />
            </Condition>
            <ButtonGroup spacing={4} mt={5}>
              <Button
                isLoading={submitting}
                loadingText="Submitting"
                variantColor="teal"
                type="submit"
              >
                Submit
              </Button>
              <Button
                variantColor="teal"
                variant="outline"
                onClick={() => {
                  setSubmitError('');
                  setResponseData('');
                  form.reset();
                }}
                isDisabled={submitting || pristine}
              >
                Reset
              </Button>
            </ButtonGroup>
          </Box>
        )}
      />
      {submitError && (
        <Text color={'red'} textAlign={'center'}>
          {<pre>{JSON.stringify(submitError, null)}</pre>}
        </Text>
      )}
      {responseData && (
        <Text color={'white'}>
          {<pre>{JSON.stringify(responseData, null, 1)}</pre>}
        </Text>
      )}
    </Box>
  );
};

export default FinalForm;
