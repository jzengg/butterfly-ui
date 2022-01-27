import React, { useState, useEffect, useCallback } from "react";
import axios from "../axiosUtils";
import Butterfly from "../components/Butterfly.react";
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
    getLeaderboard(setData);
  }, []);
  const butterflies = data?.leaderboard ?? [];

  return (
        <Flex alignItems="center" direction="column">
    <Heading size="lg" mb={8}>Leaderboard</Heading>
    <VStack>
      <OrderedList>
        {butterflies.map((butterfly, index) => (
          <ListItem key={index}>
            <HStack p={5} spacing={50}>
              <Butterfly butterfly={butterfly} imgSize={100} />
            </HStack>
          </ListItem>
        ))}
      </OrderedList>
      <NextLink href="/vote" passHref={true}>
        <Heading>
          <Link color="teal.500">Start Voting</Link>
        </Heading>
      </NextLink>
    </VStack>
    </Flex>
  );
}
