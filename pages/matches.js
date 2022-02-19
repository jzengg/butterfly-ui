import { useState, useEffect, useCallback } from "react";
import Match from "../components/Match.react";
import DownloadCSV from "../components/DownloadCSV.react";
import CountInput from "../components/CountInput.react";
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

const DEFAULT_COUNT = 50;

export default function Matches() {
  const [data, setData] = useState();
  const [count, setCount] = useState(DEFAULT_COUNT);
  useEffect(() => {
    getMatches({ callback: setData, count });
  }, [setData, count]);
  const matches = data?.matches ?? [];
  const [filterValue, setFilterValue] = useState("");
  const handleFilter = useCallback(() => {
    console.log("handling");
    let filters = {};
    if (filterValue !== "") {
      if (filterValue.match(/\w+-\w+-\w+-\w+-\w+/)) {
        filters.sessionID = filterValue;
      } else {
        filters.workerID = filterValue;
      }
    }
    getMatches({
      callback: setData,
      ...filters,
      count,
    });
  }, [setData, count, filterValue]);
  const resetFilter = useCallback(() => {
    setFilterValue("");
    getMatches({ callback: setData, count });
  }, [setData, setFilterValue, count]);
  const handleChange = useCallback(
    (event) => {
      setFilterValue(event.target.value);
    },
    [setFilterValue]
  );

  const getCSVData = useCallback(({ callback }) => {
    getMatches({ callback, count: 10000000, format: "csv" });
  }, []);
  const isDev = useIsDev();
  if (!isDev) {
    return null;
  }

  return (
    <Flex alignItems="center" direction="column">
      <Heading size="lg" mb={2}>
        Matches
      </Heading>
      <DownloadCSV getData={getCSVData} filename="matches" />
      <CountInput
        count={count}
        defaultCount={DEFAULT_COUNT}
        setCount={setCount}
      />
      <Input
        mt={2}
        mb={1}
        width={400}
        value={filterValue}
        onChange={handleChange}
        placeholder="Filter matches by session id or worker id"
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
