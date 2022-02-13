import Butterfly from "../components/Butterfly.react";
import Timestamp from "../components/Timestamp.react";
import SessionIdentifier from "../components/SessionIdentifier.react";
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
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";

export default function Match({
  match: {
    winner,
    loser,
    winner_final_rating: winnerFinalRating,
    loser_final_rating: loserFinalRating,
    loser_initial_rating: loserInitialRating,
    winner_initial_rating: winnerInitialRating,
    session_id: sessionId,
    voter_ip: voterIp,
    worker_id: workerId,
    timestamp,
    city,
    country,
    region,
    position,
    comment,
  },
}) {
  const eloGain = winnerFinalRating - winnerInitialRating;
  const eloLoss = loserInitialRating - loserFinalRating;
  const positionText = position === 0 ? "Left" : "Right";
  const positionIcon = position === 0 ? <ArrowLeftIcon /> : <ArrowRightIcon />;
  return (
    <VStack>
      <Flex direction="column">
        <Timestamp dateString={timestamp} />
        <Flex alignItems="center">
          <Text mr={1}>Winner Position: </Text>
          {positionIcon}
        </Flex>
        <SessionIdentifier sessionId={sessionId} workerId={workerId} />
        {comment !== "" && (
          <Text color="gray.500" maxWidth={400}>
            {comment}
          </Text>
        )}
        <HStack spacing={2}>
          <Tag>{voterIp}</Tag>
          <Tag>{city}</Tag>
          <Tag>{region}</Tag>
          <Tag>{country}</Tag>
        </HStack>
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
