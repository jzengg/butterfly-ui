import { useState, useEffect } from "react";
import Match from "../components/Match.react";
import useIsDev from "../hooks/useIsDev";
import {
  Center,
  Flex,
  Heading,
  OrderedList,
  Input,
  Button,
  Text,
  ListItem,
  Image,
  HStack,
  StackDivider,
  Box,
  VStack,
  Link,
} from "@chakra-ui/react";
import { getMatches } from "../apiUtils";

export default function Matches() {
  const [data, setData] = useState();
  useEffect(() => {
    getMatches({ callback: setData });
  }, []);
  const matches = data?.matches ?? [];
  const [sessionID, setSessionID] = useState("");
  const handleFilter = () => {
    getMatches({
      callback: setData,
      sessionID: sessionID === "" ? null : sessionID,
    });
  };
  const resetFilter = () => {
    setSessionID("");
    getMatches({ callback: setData, sessionID: null });
  };
  const handleChange = (event) => {
    setSessionID(event.target.value);
  };
  const isDev = useIsDev();
  if (!isDev) {
    return null;
  }

  return (
    <Flex alignItems="center" direction="column">
      <Heading size="lg" mb={2}>
        Matches
      </Heading>
      <Input
        mb={1}
        width={400}
        value={sessionID}
        onChange={handleChange}
        placeholder="Filter matches by session id"
        size="sm"
      />
      <Flex>
        <Button mr={2} onClick={handleFilter}>
          Filter
        </Button>
        <Button onClick={resetFilter}>Reset</Button>
      </Flex>
      <VStack>
        <OrderedList>
          {matches.map((match, index) => (
            <ListItem key={index}>
              <HStack p={5} spacing={50}>
                <Match match={match} />
              </HStack>
            </ListItem>
          ))}
        </OrderedList>
      </VStack>
    </Flex>
  );
}
