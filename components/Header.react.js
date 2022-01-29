import { Flex, Heading, Link, HStack, Text, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { forwardRef } from "react";
import { numVotesState } from "../atoms";
import useSessionId from "../hooks/useSessionId";
import { useRecoilValue } from "recoil";
import { isDev, clearLocalStorage } from "../apiUtils";

export default function Header() {
  const sessionId = useSessionId();
  const numVotes = useRecoilValue(numVotesState);
  return (
    <Flex direction="column" mb={4}>
      <HStack>
        <NextLink href="/" passHref={true}>
          <ActiveLink>Home</ActiveLink>
        </NextLink>
        <NextLink href="/vote" passHref={true}>
          <ActiveLink>Vote</ActiveLink>
        </NextLink>
        <NextLink href="/leaderboard" passHref={true}>
          <ActiveLink>Leaderboard</ActiveLink>
        </NextLink>
      </HStack>
      {isDev() && (
        <Flex mt={4} direction="column">
          <Text>Num Votes: {numVotes}</Text>
          <Text>Session ID: {sessionId}</Text>
          <Button width="50px" size="xs" onClick={clearLocalStorage}>Reset</Button>
        </Flex>
      )}
    </Flex>
  );
}
const ActiveLink = forwardRef(({ onClick, href, children }, ref) => {
  const router = useRouter();
  const color = router.asPath === href ? "teal.300" : "teal.600";
  return (
    <Link href={href} color={color}>
      {children}
    </Link>
  );
});
ActiveLink.displayName = 'ActiveLink';
