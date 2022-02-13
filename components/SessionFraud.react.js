import Timestamp from "../components/Timestamp.react";
import SessionIdentifier from "../components/SessionIdentifier.react";
import {
  Flex,
  Tag,
  Image,
  StatHelpText,
  StatLabel,
  StatGroup,
  StatNumber,
  StatArrow,
  Text,
  VStack,
  HStack,
  Stat,
} from "@chakra-ui/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";

export default function SessionFraud({
  sessionFraud: {
    session_id: sessionId,
    timestamp,
    frequent_voting_count: frequentVotingCount,
    same_side_voting_count: sameSideVotingCount,
    worker_id: workerId,
  },
}) {
  return (
    <VStack>
      <Flex direction="column">
        <Timestamp dateString={timestamp} />
        <HStack spacing={2}>
          <SessionIdentifier sessionId={sessionId} workerId={workerId} />
        </HStack>
        <StatGroup>
          <Stat>
            <StatLabel>Frequent voting violations</StatLabel>
            <StatNumber>{frequentVotingCount}</StatNumber>
          </Stat>

          <Stat>
            <StatLabel>Same side voting violations</StatLabel>
            <StatNumber>{sameSideVotingCount}</StatNumber>
          </Stat>
        </StatGroup>
      </Flex>
    </VStack>
  );
}
