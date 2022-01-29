import { Flex, Heading, Link, HStack, Text, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { forwardRef } from "react";
import { numVotesState } from "../atoms";
import useSessionId from "../hooks/useSessionId";
import { useRecoilValue } from "recoil";
import { clearLocalStorage } from "../apiUtils";
import useIsDev from "../hooks/useIsDev";

export default function Header() {
  const sessionId = useSessionId();
  const numVotes = useRecoilValue(numVotesState);
  const router = useRouter();
  function getColor(href) {
    const color = router.asPath === href ? "teal.300" : "teal.600";
    return color;
  }
  const isDev = useIsDev()
  return (
    <Flex direction="column" mb={4}>
      <HStack>
        <NextLink href="/" passHref={true}>
          <Link color={getColor("/")}>Home</Link>
        </NextLink>
        <NextLink href="/vote" passHref={true}>
          <Link color={getColor("/vote")}>Vote</Link>
        </NextLink>
        <NextLink href="/leaderboard" passHref={true}>
          <Link color={getColor("/leaderboard")}>Leaderboard</Link>
        </NextLink>
      </HStack>
      {isDev && (
        <Flex mt={4} direction="column">
          <Text>Num Votes: {numVotes}</Text>
          <Text>Session ID: {sessionId}</Text>
          <Button width="50px" size="xs" onClick={clearLocalStorage}>
            Reset
          </Button>
        </Flex>
      )}
    </Flex>
  );
}
