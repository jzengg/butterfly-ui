import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "../components/Header.react";
import { Center, VStack } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <Center p={4}>
          <VStack>
            <Header />
            <Component {...pageProps} />
          </VStack>
        </Center>
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;
