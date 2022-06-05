import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';

import FinalForm from './FinalForm';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box display={'flex'}>
        <FinalForm />
      </Box>
    </ChakraProvider>
  );
}

export default App;
