import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "../components/Header.react";
import { Center, VStack, Divider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <Center p={4}>
          <VStack>
            <Header />
            <Divider orientation="horizontal" />
            <Component {...pageProps} />
          </VStack>
        </Center>
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;
