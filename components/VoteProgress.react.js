import Candidate from "../components/Candidate.react";
import NextLink from "next/link";
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
import { numVotesState, isWorkerState } from "../atoms";

export default function VoteProgress() {
  const numVotes = useRecoilValue(numVotesState);
  const isWorker = useRecoilValue(isWorkerState);
  const completionText = isWorker
    ? "Get to 100% to complete the session"
    : "Get to 100% to see the leaderboard!";
  if (numVotes >= 100) {
    return (
      <Flex>
        <Text mr={1}>Thank you for voting {numVotes} times!</Text>
        <NextLink m href="/leaderboard" passHref={true}>
          <Link color="orange.300">See the Leaderboard</Link>
        </NextLink>
      </Flex>
    );
  }
  return (
    <Stat>
      <StatLabel>Vote Progress</StatLabel>
      <Progress value={numVotes} />
      <StatHelpText>{completionText}</StatHelpText>
    </Stat>
  );
}
