import { Flex, Heading, Link, HStack } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Header() {
  return (
    <Flex mb={4}>
      <HStack>
        <NextLink href="/" passHref={true}>
          <Link color="teal.500">Home</Link>
        </NextLink>
        <NextLink href="/vote" passHref={true}>
          <Link color="teal.500">Vote</Link>
        </NextLink>
        <NextLink href="/leaderboard" passHref={true}>
          <Link color="teal.500">Leaderboard</Link>
        </NextLink>
      </HStack>
    </Flex>
  );
}
