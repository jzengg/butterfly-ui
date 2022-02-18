import { Flex, Heading, Link, HStack, Text, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { forwardRef } from "react";
import { numVotesState, isWorkerState, workerIDState } from "../atoms";
import useSessionId from "../hooks/useSessionId";
import useGetHrefWithQuery from "../hooks/useGetHrefWithQuery";
import { useRecoilValue } from "recoil";
import { clearLocalStorage } from "../apiUtils";
import useIsDev from "../hooks/useIsDev";

export default function Header() {
  const [sessionId] = useSessionId();
  const numVotes = useRecoilValue(numVotesState);
  const isWorker = useRecoilValue(isWorkerState);
  const workerID = useRecoilValue(workerIDState);
  const router = useRouter();
  function getColor(href) {
    const color = router.asPath === href ? "teal.300" : "teal.600";
    return color;
  }
  const getHref = useGetHrefWithQuery();
  const isDev = useIsDev();
  if (!isDev) {
    return <></>;
  }
  return (
    <Flex direction="column">
      <HStack>
        <NextLink href={getHref("/")} passHref={true}>
          <Link color={getColor("/")}>Home</Link>
        </NextLink>
        <NextLink href={getHref("/survey")} passHref={true}>
          <Link color={getColor("/survey")}>Vote</Link>
        </NextLink>
        <NextLink href={getHref("/matches")} passHref={true}>
          <Link color={getColor("/matches")}>Matches</Link>
        </NextLink>
        <NextLink href={getHref("/leaderboard")} passHref={true}>
          <Link color={getColor("/leaderboard")}>Leaderboard</Link>
        </NextLink>
        <NextLink href={getHref("/session_frauds")} passHref={true}>
          <Link color={getColor("/session_frauds")}>Session Frauds</Link>
        </NextLink>
        <NextLink href={getHref("/turk")} passHref={true}>
          <Link color={getColor("/turk")}>Turk Landing</Link>
        </NextLink>
        <NextLink href={getHref("/turk_completed")} passHref={true}>
          <Link color={getColor("/turk_completed")}>Turk Completed</Link>
        </NextLink>
      </HStack>
      <Flex mt={4} direction="column">
        <Text>Num Votes: {numVotes}</Text>
        <Text>Session ID: {sessionId}</Text>
        {workerID != null && <Text>Worker ID: {workerID}</Text>}
        <Button
          width="50px"
          size="xs"
          onClick={() => {
            clearLocalStorage();
            router.reload();
          }}
        >
          Reset
        </Button>
      </Flex>
    </Flex>
  );
}
