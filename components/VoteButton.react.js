import { Button } from "@chakra-ui/react";
import useSessionId from "../hooks/useSessionId";
import { numVotesState, isWorkerState } from "../atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { createMatchupResult, getIp } from "../apiUtils";
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
    getIp({
      callback: ({ city, country, region, ip: voter_ip }) => {
        createMatchupResult({
          data: {
            winner_id: winnerId,
            loser_id: loserId,
            session_id: sessionId,
            position,
            voter_ip,
            city,
            country,
            region,
          },
          callback: () => {
            setNumVotes(numVotes + 1);
            if (isWorker && numVotes === 99) {
              router.push("/turk_completed");
            } else {
              refreshMatchup();
            }
          },
        });
      },
    });
  };

  return (
    <Button colorScheme="blue" size="lg" onClick={handleVote}>
      Vote
    </Button>
  );
}
