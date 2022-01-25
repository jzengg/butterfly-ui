import {
  VStack,
  Center,
  Button,
  Container,
  Image,
  Flex,
} from "@chakra-ui/react";
import axios from "../axiosUtils";

export default function VoteButton({ winnerId, loserId }) {
  const handleVote = () => {
    const response = axios({
      method: "post",
      data: {
        winner_id: winnerId,
        loser_id: loserId,
        voter_ip: 'abc'
      },
      url: "/match_result",
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  return <Button onClick={handleVote}>Vote</Button>;
}
