import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';

import FinalForm from './FinalForm';

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
