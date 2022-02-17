import {
  VStack,
  Center,
  Button,
  Container,
  Image,
  Flex,
} from "@chakra-ui/react";
import VoteButton from "../components/VoteButton.react";
import Butterfly from "../components/Butterfly.react";

export default function Candidate({
  player,
  opponent: { id: opponentId },
  refreshMatchup,
  position,
}) {
  const playerId = player.id;
  return (
    <VStack>
      <VoteButton
        butterfly={player}
        position={position}
        refreshMatchup={refreshMatchup}
        winnerId={playerId}
        loserId={opponentId}
      >
        Vote
      </VoteButton>
    </VStack>
  );
}
