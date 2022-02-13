import React, { useState, useEffect, useCallback } from "react";
import Butterfly from "../components/Butterfly.react";
import useGetHrefWithQuery from "../hooks/useGetHrefWithQuery";
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
import { getLeaderboard } from "../apiUtils";
import NextLink from "next/link";

export default function Leaderboard() {
  const [data, setData] = useState();
  useEffect(() => {
    getLeaderboard({ callback: setData });
  }, []);
  const butterflies = data?.leaderboard ?? [];
  const getHref = useGetHrefWithQuery();

  return (
    <Flex alignItems="center" direction="column">
      <Heading size="lg" mb={2}>
        Leaderboard
      </Heading>
      <NextLink href={getHref("/vote")} passHref={true}>
        <Heading mb={4} size="md">
          <Link color="teal.500">Start Voting</Link>
        </Heading>
      </NextLink>
      <VStack>
        <OrderedList>
          {butterflies.map((butterfly, index) => (
            <ListItem key={index}>
              <HStack p={5} spacing={[10, 20, 30, 50]}>
                <Butterfly butterfly={butterfly} imgSize={200} />
              </HStack>
            </ListItem>
          ))}
        </OrderedList>
      </VStack>
    </Flex>
  );
}
