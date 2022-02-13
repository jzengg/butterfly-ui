import { Flex, Tag, Text } from "@chakra-ui/react";

export default function SessionIdentifier({ sessionId, workerId }) {
  return (
    <>
      <Flex>
        <Text mr={1}>Session ID</Text>
        <Tag>{sessionId}</Tag>
      </Flex>
      {workerId != null && (
        <Flex>
          <Text mr={1}>Worker ID</Text>
          <Tag>{workerId}</Tag>
        </Flex>
      )}
    </>
  );
}
