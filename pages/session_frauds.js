import { useState, useEffect } from "react";
import SessionFraud from "../components/SessionFraud.react";
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
  if (!isDev) {
    return null;
  }

  return (
    <Flex alignItems="center" direction="column">
      <Heading size="lg" mb={2}>
        Session Frauds
      </Heading>
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
