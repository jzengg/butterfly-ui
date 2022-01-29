import { Button } from "@chakra-ui/react";
import useSessionId from "../hooks/useSessionId";
import { numVotesState } from "../atoms";
import { useRecoilState } from "recoil";
import { createMatchupResult } from "../apiUtils";

export default function VoteButton({ winnerId, loserId, refreshMatchup }) {
  const [sessionId] = useSessionId();
  const [numVotes, setNumVotes] = useRecoilState(numVotesState);

  const handleVote = () => {
    createMatchupResult({
      data: {
        winner_id: winnerId,
        loser_id: loserId,
        session_id: sessionId,
      },
      callback: () => {
        setNumVotes(numVotes + 1);
        refreshMatchup();
      },
    });
  };

  return (
    <Button colorScheme="blue" size="lg" onClick={handleVote}>
      Vote
    </Button>
  );
}
