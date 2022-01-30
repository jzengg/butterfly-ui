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
import { numVotesState } from "../atoms";

export default function VoteProgress() {
  const numVotes = useRecoilValue(numVotesState);
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
      <StatHelpText>Get to 100% to see the leaderboard!</StatHelpText>
    </Stat>
  );
}
