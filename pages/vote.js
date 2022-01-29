import React, { useState, useEffect, useCallback } from "react";
import axios from "../axiosUtils";
import Candidate from "../components/Candidate.react";
import {
  Center,
  SimpleGrid,
  Container,
  Image,
  Flex,
  Heading,
  useToast,
} from "@chakra-ui/react";
import { getMatchup } from "../apiUtils";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { numVotesState } from "../atoms";

export default function Vote() {
  const [data, setData] = useState();
  useEffect(() => {
    getMatchup(setData);
  }, []);

  const newNumVotes = useRecoilValue(numVotesState) + 1;
  const toast = useToast();
  const shouldShowToast = newNumVotes > 0 && newNumVotes % 10 === 0;

  const refreshMatchup = useCallback(() => {
    if (shouldShowToast) {
      toast({
        title: "Thank you!",
        description: `Thanks for voting ${newNumVotes} times!`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
    getMatchup(setData);
  }, [shouldShowToast, newNumVotes, toast]);

  const player = data?.player ?? {};
  const opponent = data?.opponent ?? {};
  return (
    <Flex alignItems="center" direction="column">
      <Heading size="lg" mb={8}>
        Pick the one you like better
      </Heading>
      <SimpleGrid columns={2} spacing={100}>
        <Candidate
          refreshMatchup={refreshMatchup}
          player={player}
          opponent={opponent}
        />
        <Candidate
          refreshMatchup={refreshMatchup}
          player={opponent}
          opponent={player}
        />
      </SimpleGrid>
    </Flex>
  );
}
