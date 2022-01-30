import { useState, useEffect } from "react";
import Match from "../components/Match.react";
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
import { getMatches } from "../apiUtils";
import NextLink from "next/link";

export default function Matches() {
  const [data, setData] = useState();
  useEffect(() => {
    getMatches({ callback: setData });
  }, []);
  const matches = data?.matches ?? [];

  return (
    <Flex alignItems="center" direction="column">
      <Heading size="lg" mb={2}>
        Matches
      </Heading>
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
