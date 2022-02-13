import useSessionId from "../hooks/useSessionId";
import { Heading, Tag, Flex, Text } from "@chakra-ui/react";

export default function TurkCompleted() {
  const sessionID = useSessionId();
  return (
    <Flex direction="column">
      <Heading size="lg" mb={2}>
        Session Complete
      </Heading>
      <Text>Completion Code</Text>
      <Tag>{sessionID}</Tag>
    </Flex>
  );
}
