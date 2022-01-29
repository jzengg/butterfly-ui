import { Container, Heading, Text, HStack, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Home() {
  return (
    <Container>
      <Container mb={12}>
        <Heading>Butterfly rating project</Heading>
        <Text>Introduction goes here</Text>
      </Container>
      <HStack spacing={8} justifyContent="center">
        <NextLink href="/vote" passHref={true}>
          <Heading size="md">
            <Link color="teal.500">Start Voting</Link>
          </Heading>
        </NextLink>
        <NextLink href="/leaderboard" passHref={true}>
          <Heading size="md">
            <Link color="teal.500">Check the leaderboard</Link>
          </Heading>
        </NextLink>
      </HStack>
    </Container>
  );
}
