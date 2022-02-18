import Candidate from "../components/Candidate.react";
import NextLink from "next/link";
import useGetHrefWithQuery from "../hooks/useGetHrefWithQuery";
import {
  Text,
  Link,
  Flex,
  Stat,
  StatLabel,
  StatHelpText,
  Progress,
} from "@chakra-ui/react";
import { getMatchup } from "../apiUtils";
import { useRecoilValue } from "recoil";
import { numVotesState } from "../atoms";

export default function VoteProgress() {
  const getHref = useGetHrefWithQuery();
  const numVotes = useRecoilValue(numVotesState);
  return (
    <Stat>
      <StatLabel>Session Progress</StatLabel>
      <Progress value={numVotes} />
      <StatHelpText>{numVotes} / 100</StatHelpText>
    </Stat>
  );
}
