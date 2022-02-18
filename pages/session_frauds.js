import { useState, useEffect, useCallback } from "react";
import SessionFraud from "../components/SessionFraud.react";
import DownloadCSV from "../components/DownloadCSV.react";
import useIsDev from "../hooks/useIsDev";
import {
  Center,
  Flex,
  Heading,
  OrderedList,
  ListItem,
  Image,
  HStack,
  StackDivider,
  Box,
  VStack,
  Link,
} from "@chakra-ui/react";
import { getSessionFrauds } from "../apiUtils";

export default function SessionFrauds() {
  const [data, setData] = useState();
  useEffect(() => {
    getSessionFrauds({ callback: setData });
  }, []);
  const sessionFrauds = data?.session_frauds ?? [];
  const isDev = useIsDev();

  const getCSVData = useCallback(({ callback }) => {
    getSessionFrauds({ callback, count: 10000000, format: "csv" });
  }, []);

  if (!isDev) {
    return null;
  }
  return (
    <Flex alignItems="center" direction="column">
      <Heading size="lg" mb={2}>
        Session Frauds
      </Heading>
      <DownloadCSV getData={getCSVData} filename="session_frauds" />
      <VStack>
        <OrderedList>
          {sessionFrauds.map((sessionFraud, index) => (
            <ListItem key={index}>
              <HStack p={5} spacing={50}>
                <SessionFraud sessionFraud={sessionFraud} />
              </HStack>
            </ListItem>
          ))}
        </OrderedList>
      </VStack>
    </Flex>
  );
}
