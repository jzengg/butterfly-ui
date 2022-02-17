import Leaderboard from "../pages/leaderboard";
import { Heading, Tag, Flex, Text, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function TurkCompleted() {
  const router = useRouter();
  const { completionCode } = router.query;
  return (
    <Flex direction="column">
      <Heading size="lg" mb={2}>
        Session Complete
      </Heading>
      <Text>Completion Code</Text>
      <Tag>{completionCode}</Tag>
      <Box mt={8}>
        <Leaderboard />
      </Box>
    </Flex>
  );
}
