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
  useToast,
} from "@chakra-ui/react";
import { getMatchup } from "../apiUtils";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { numVotesState } from "../atoms";

export default function Vote() {
  const [data, setData] = useState();
  useEffect(() => {
    getMatchup({ callback: setData });
  }, []);

  const newNumVotes = useRecoilValue(numVotesState) + 1;
  const toast = useToast();

  const refreshMatchup = useCallback(() => {
    if (shouldShowToast(newNumVotes)) {
      toast({
        title: getToastTitle(newNumVotes),
        description: `Thanks for voting ${newNumVotes} times!`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
    getMatchup({ callback: setData });
  }, [shouldShowToast, newNumVotes, toast]);

  const player = data?.player ?? {};
  const opponent = data?.opponent ?? {};
  return (
    <Flex alignItems="center" direction="column">
      <VoteProgress />
      <Heading size="lg">Pick the one you like better</Heading>
      <SimpleGrid mt={2} columns={2} spacing={[10, 20, 50, 100]}>
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

function shouldShowToast(numVotes) {
  if (numVotes === 0) {
    return false;
  }
  if (numVotes <= 30) {
    return numVotes % 10 === 0;
  } else {
    return numVotes % 50 === 0;
  }
}

function getToastTitle(numVotes) {
  if (numVotes < 50) {
    return "Thank you!";
  }
  return "Amazing!";
}
