import {
  VStack,
  Center,
  Button,
  Container,
  Image,
  Flex,
} from "@chakra-ui/react";
import axios from "../axiosUtils";
import { v4 as uuidv4 } from 'uuid';

export default function VoteButton({ winnerId, loserId, refreshMatchup }) {
  const handleVote = () => {
    const sessionId = uuidv4()
    const response = axios({
      method: "post",
      data: {
        winner_id: winnerId,
        loser_id: loserId,
        session_id: sessionId,
      },
      url: "/match_result",
    })
      .then((response) => {
        refreshMatchup();
      })
      .catch((error) => console.log(error));
  };

  return (
    <Button colorScheme="blue" size="lg" onClick={handleVote}>
      Vote
    </Button>
  );
}
