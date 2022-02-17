import { Button } from "@chakra-ui/react";
import useSessionId from "../hooks/useSessionId";
import { numVotesState, isWorkerState } from "../atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { createMatchupResult, getIp, clearLocalStorage } from "../apiUtils";
import { useRouter } from "next/router";

export default function VoteButton({
  winnerId,
  loserId,
  refreshMatchup,
  position,
}) {
  const [sessionId] = useSessionId();
  const [numVotes, setNumVotes] = useRecoilState(numVotesState);
  const isWorker = useRecoilValue(isWorkerState);
  const router = useRouter();

  const handleVote = () => {
    createMatchupResult({
      data: {
        winner_id: winnerId,
        loser_id: loserId,
        session_id: sessionId,
        position,
      },
      callback: () => {
        if (isWorker && numVotes >= 99) {
          clearLocalStorage();
          const completionCode = sessionId;
          router.push({
            pathname: "/turk_completed",
            query: { ...router.query, completionCode },
          });
        } else {
          setNumVotes(numVotes + 1);
          refreshMatchup();
        }
      },
    });
  };

  return (
    <Button colorScheme="blue" size="lg" onClick={handleVote}>
      Like
    </Button>
  );
}
