const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  if (!values.preparation_time) {
    errors.preparation_time = 'Required';
  }
  if (!values.type) {
    errors.type = 'Required';
  }
  if (values.type === 'pizza') {
    if (!values.no_of_slices) {
      errors.no_of_slices = 'Required';
    } else if (
      parseInt(values.no_of_slices) < 0 ||
      Number.isInteger(values.no_of_slices)
    ) {
      errors.no_of_slices = 'Wrong number';
    }

    if (!values.diameter) {
      errors.diameter = 'Required';
    } else if (parseFloat(values.diameter) < 0) {
      errors.diameter = 'Wrong number';
    }
  } else if (values.type === 'soup') {
    if (!values.spiciness_scale) {
      errors.spiciness_scale = 'Required';
    }
  } else if (values.type === 'sandwich') {
    if (!values.slices_of_bread) {
      errors.slices_of_bread = 'Required';
    } else if (
      parseInt(values.slices_of_bread) < 0 ||
      Number.isInteger(values.slices_of_bread)
    ) {
      errors.no_of_slices = 'Wrong number';
    }
  }

  return errors;
};
export default validate;
