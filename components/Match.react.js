import Butterfly from "../components/Butterfly.react";
import {
  Center,
  Flex,
  Heading,
  OrderedList,
  ListItem,
  Image,
  StatHelpText,
  StatLabel,
  StatNumber,
  StatArrow,
  StackDivider,
  Box,
  Text,
  VStack,
  HStack,
  Link,
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
        <VStack>
      <Text>{timestamp}</Text>
      <Text>{sessionId}</Text>
      </VStack>
      <HStack>

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
