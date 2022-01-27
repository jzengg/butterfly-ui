import React, { useState, useEffect, useCallback } from "react";
import axios from "../axiosUtils";
import Butterfly from "../components/Butterfly.react";
import { Center, OrderedList, ListItem, Image, HStack, StackDivider, Box } from "@chakra-ui/react";
import { getLeaderboard } from "../apiUtils";

export default function Leaderboard() {
  const [data, setData] = useState();
  useEffect(() => {
    getLeaderboard(setData);
  }, []);
  const butterflies = data?.leaderboard ?? [];

  return (
    <Center>
      <OrderedList>
        {butterflies.map((butterfly, index) => (
            <ListItem key={index}>
            <HStack p={5} spacing={50}>
            <Butterfly butterfly={butterfly} imgSize={100} />
            </HStack>
            </ListItem>
        ))}
      </OrderedList>
    </Center>
  );
}
