import { Button } from "@chakra-ui/react";
import useSessionId from "../hooks/useSessionId";
import Butterfly from "../components/Butterfly.react";
import {
  numVotesState,
  isWorkerState,
  workerIDState,
  voteIsDisabledState,
} from "../atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { createMatchupResult, getIp, clearLocalStorage } from "../apiUtils";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function VoteButton({
  winnerId,
  loserId,
  refreshMatchup,
  position,
  butterfly,
}) {
  const [sessionId] = useSessionId();
  const [numVotes, setNumVotes] = useRecoilState(numVotesState);
  const [isDisabled, setIsDisabled] = useRecoilState(voteIsDisabledState);
  const isWorker = useRecoilValue(isWorkerState);
  const workerID = useRecoilValue(workerIDState);
  const router = useRouter();
  useEffect(() => {
    const interval = setTimeout(function () {
      setIsDisabled(false);
    }, 1000);
    return interval;
  }, [winnerId, loserId]);

  const handleVote = () => {
    if (isDisabled) {
      return;
    }
    createMatchupResult({
      data: {
        winner_id: winnerId,
        loser_id: loserId,
        session_id: sessionId,
        worker_id: workerID,
        position,
      },
      callback: () => {
        setIsDisabled(true);
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
    <>
      <Butterfly butterfly={butterfly} />
      <Button
        isDisabled={isDisabled}
        colorScheme="blue"
        size="lg"
        onClick={handleVote}
      >
        Like
      </Button>
    </>
  );
}
