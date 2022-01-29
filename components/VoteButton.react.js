import {
  VStack,
  Center,
  Button,
  Container,
  Image,
  Flex,
} from "@chakra-ui/react";
import axios from "../axiosUtils";
import useLocalStorage from "../hooks/useLocalStorage";
import { v4 as uuidv4 } from "uuid";

export default function VoteButton({ winnerId, loserId, refreshMatchup }) {
   const [sessionId, _] = useLocalStorage({
      key: "hotbutterfly-sessionid",
      defaultValue: uuidv4(),
    });
    const [numVotes, setNumVotes] = useLocalStorage({
      key: "hotbutterfly-numvotes",
      defaultValue: 0,
    });
  const handleVote = () => {
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
        setNumVotes(numVotes + 1);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Button colorScheme="blue" size="lg" onClick={handleVote}>
      Vote
    </Button>
  );
}
