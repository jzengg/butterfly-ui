import { Button } from "@chakra-ui/react";
import axios from "../axiosUtils";
import useSessionId from "../hooks/useSessionId";
import { numVotesState } from "../atoms";
import { useRecoilState } from "recoil";

export default function VoteButton({ winnerId, loserId, refreshMatchup }) {
  const [sessionId] = useSessionId();
  const [numVotes, setNumVotes] = useRecoilState(numVotesState);

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
        setNumVotes(numVotes + 1);
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
