import React, { useState, useEffect, useCallback } from "react";
import Candidate from "../components/Candidate.react";
import VoteProgress from "../components/VoteProgress.react";
import {
  Center,
  SimpleGrid,
  Container,
  Image,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { getMatchup } from "../apiUtils";

export default function Vote() {
  const [data, setData] = useState();
  useEffect(() => {
    getMatchup({ callback: setData });
  }, []);

  const refreshMatchup = useCallback(() => {
    getMatchup({ callback: setData });
  }, [setData]);

  const player = data?.player ?? {};
  const opponent = data?.opponent ?? {};
  return (
    <Flex alignItems="center" direction="column">
      <VoteProgress />
      <Heading size="lg">Pick the one you like better</Heading>
      <SimpleGrid mt={2} columns={2} spacing={[10, 20, 50, 100]}>
        <Candidate
          position={0}
          refreshMatchup={refreshMatchup}
          player={player}
          opponent={opponent}
        />
        <Candidate
          position={1}
          refreshMatchup={refreshMatchup}
          player={opponent}
          opponent={player}
        />
      </SimpleGrid>
    </Flex>
  );
}
