import { Flex, Heading, Link, HStack, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { forwardRef } from "react";

export default function Header() {
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
