import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "../components/Header.react";
import { Center, VStack } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Center p={4}>
        <VStack>
          <Header  />
          <Component {...pageProps} />
        </VStack>
      </Center>
    </ChakraProvider>
  );
}

export default MyApp;
