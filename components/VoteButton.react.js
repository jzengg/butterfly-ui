import {
  VStack,
  Center,
  Button,
  Container,
  Image,
  Flex,
} from "@chakra-ui/react";
import axios from "../axiosUtils";

export default function VoteButton({ winnerId, loserId, refreshMatchup }) {
  const handleVote = () => {
    let voterIp = "";
    // const ipResponse = axios
    //   .get(
    //     "https://app.cors.bridged.cc/http://api.ipify.org/?format=json"
    //   )
    //   .then((response) => {
    //       voterIp = response.data.ip
    //       console.log(response.data.ip)
    //   });
    const response = axios({
      method: "post",
      data: {
        winner_id: winnerId,
        loser_id: loserId,
        voter_ip: voterIp,
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
