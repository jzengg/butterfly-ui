import Butterfly from "../components/Butterfly.react";
import {
  Flex,
  Tag,
  Image,
  StatHelpText,
  StatLabel,
  StatNumber,
  StatArrow,
  Text,
  VStack,
  HStack,
  Stat,
} from "@chakra-ui/react";

export default function Match({
  match: {
    winner,
    loser,
    winner_final_rating: winnerFinalRating,
    loser_final_rating: loserFinalRating,
    loser_initial_rating: loserInitialRating,
    winner_initial_rating: winnerInitialRating,
    session_id: sessionId,
    timestamp,
  },
}) {
  const eloGain = winnerFinalRating - winnerInitialRating;
  const eloLoss = loserInitialRating - loserFinalRating;
  return (
    <VStack>
      <Flex>
        <Text color="gray.500" mr={1}>
          {timestamp}
        </Text>
        <Tag>{sessionId}</Tag>
      </Flex>
      <HStack spacing="100px">
        <HStack>
          <Butterfly imgSize={50} butterfly={winner} />
          <Stat>
            <StatLabel>ELO</StatLabel>
            <StatNumber>{winnerFinalRating}</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              {eloGain}
            </StatHelpText>
          </Stat>
        </HStack>
        <HStack>
          <Butterfly imgSize={50} butterfly={loser} />
          <Stat>
            <StatLabel>ELO</StatLabel>
            <StatNumber>{loserFinalRating}</StatNumber>
            <StatHelpText>
              <StatArrow type="decrease" />
              {eloLoss}
            </StatHelpText>
          </Stat>
        </HStack>
      </HStack>
    </VStack>
  );
}
