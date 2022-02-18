import React, { useState, useEffect, useCallback } from "react";
import Butterfly from "../components/Butterfly.react";
import DownloadCSV from "../components/DownloadCSV.react";
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
const DEFAULT_COUNT = 20;

export default function Leaderboard() {
  const [data, setData] = useState();
  const [matchCount, setMatchCount] = useState(DEFAULT_COUNT);
  useEffect(() => {
    getLeaderboard({ callback: setData });
  }, []);
  const butterflies = data?.leaderboard ?? [];
  const getHref = useGetHrefWithQuery();
  const getCSVData = useCallback(({ callback }) => {
    getLeaderboard({ callback, count: 10000000, format: "csv" });
  });

  return (
    <Flex alignItems="center" direction="column">
      <Heading size="lg" mb={2}>
        Leaderboard
      </Heading>
      <DownloadCSV getData={getCSVData} filename="butterflies" />
      <VStack>
        <OrderedList>
          {butterflies.map((butterfly, index) => (
            <ListItem key={index}>
              <HStack p={5} spacing={[10, 20, 30, 50]}>
                <Butterfly
                  butterfly={butterfly}
                  imgSize={500}
                  showName={true}
                />
              </HStack>
            </ListItem>
          ))}
        </OrderedList>
      </VStack>
    </Flex>
  );
}
