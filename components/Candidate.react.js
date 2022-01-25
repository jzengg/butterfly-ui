import {
  VStack,
  Center,
  Button,
  Container,
  Image,
  Flex,
} from "@chakra-ui/react";
import VoteButton from "../components/VoteButton.react";

export default function Candidate({
  player: { name, rating, image_url: imageUrl, id: playerId },
  opponent: { id: opponentId },
  refreshMatchup
}) {
  return (
    <VStack>
      <Flex>Name: {name}</Flex>
      <Flex>ID: {playerId}</Flex>
      <Flex>Rating: {rating}</Flex>
      <Image boxSize="400px" src={imageUrl} />
      <VoteButton refreshMatchup={refreshMatchup} winnerId={playerId} loserId={opponentId}>
        Vote
      </VoteButton>
    </VStack>
  );
}
