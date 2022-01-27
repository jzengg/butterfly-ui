import { Flex, Heading, Link, HStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  return (
    <Flex mb={4}>
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
    </Flex>
  );
}

function ActiveLink({ children, href }) {
  const router = useRouter();
  const color = router.asPath === href ? "teal.300" : "teal.600";
  return (
    <Link href={href} color={color}>
      {children}
    </Link>
  );
}
