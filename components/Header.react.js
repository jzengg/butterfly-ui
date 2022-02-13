import { Flex, Heading, Link, HStack, Text, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { forwardRef } from "react";
import { numVotesState, isWorkerState } from "../atoms";
import useSessionId from "../hooks/useSessionId";
import { useRecoilValue } from "recoil";
import { clearLocalStorage } from "../apiUtils";
import useIsDev from "../hooks/useIsDev";

export default function Header() {
  const [sessionId] = useSessionId();
  const numVotes = useRecoilValue(numVotesState);
  const isWorker = useRecoilValue(isWorkerState);
  const router = useRouter();
  function getColor(href) {
    const color = router.asPath === href ? "teal.300" : "teal.600";
    return color;
  }
  const isWorkerPage = router.asPath === "/turk";
  const shouldShowNavigation = !isWorkerPage && !isWorker;

  const isDev = useIsDev();
  return (
    <Flex direction="column">
      <HStack>
        {shouldShowNavigation && (
          <NextLink href="/" passHref={true}>
            <Link color={getColor("/")}>Home</Link>
          </NextLink>
        )}
        {shouldShowNavigation && (
          <NextLink href="/vote" passHref={true}>
            <Link color={getColor("/vote")}>Vote</Link>
          </NextLink>
        )}
        {isDev && (
          <>
            <NextLink href="/matches" passHref={true}>
              <Link color={getColor("/matches")}>Matches</Link>
            </NextLink>
            <NextLink href="/session_frauds" passHref={true}>
              <Link color={getColor("/session_frauds")}>Session Frauds</Link>
            </NextLink>
            <NextLink href="/turk" passHref={true}>
              <Link color={getColor("/turk")}>Turk Landing</Link>
            </NextLink>
            <NextLink href="/turk_completed" passHref={true}>
              <Link color={getColor("/turk_completed")}>Turk Completed</Link>
            </NextLink>
          </>
        )}
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
