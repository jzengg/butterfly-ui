import React, { useState, useEffect, useCallback } from "react";
import { Flex, Heading, Input, Button } from "@chakra-ui/react";
import { createWorker } from "../apiUtils";
import useSessionId from "../hooks/useSessionId";
import { useRouter } from "next/router";
import { isWorkerState } from "../atoms";
import { useSetRecoilState } from "recoil";

export default function Turk() {
  const [workerID, setWorkerID] = useState("");
  const router = useRouter();
  const [sessionID] = useSessionId();
  const setIsWorkerState = useSetRecoilState(isWorkerState);
  const handleChange = (event) => setWorkerID(event.target.value);
  const handleSubmit = () => {
    createWorker({
      callback: () => {
        setIsWorkerState(true);
        router.push({ pathname: "/vote", query: router.query });
      },
      data: { worker_id: workerID, session_id: sessionID },
    });
  };
  return (
    <Flex direction="column">
      <Heading mb={2} size="lg">
        Enter your worker ID
      </Heading>
      <Input
        mb={2}
        width={400}
        value={workerID}
        onChange={handleChange}
        placeholder="Enter worker ID"
        size="sm"
      />
      <Button mr={2} onClick={handleSubmit}>
        Submit
      </Button>
    </Flex>
  );
}

function shouldShowToast(numVotes) {
  if (numVotes === 0) {
    return false;
  }
  if (numVotes <= 30) {
    return numVotes % 10 === 0;
  } else {
    return numVotes % 50 === 0;
  }
}

function getToastTitle(numVotes) {
  if (numVotes < 50) {
    return "Thank you!";
  }
  return "Amazing!";
}
