import React, { useState, useEffect, useCallback } from "react";
import {
  Flex,
  Heading,
  Box,
  Input,
  Button,
  Text,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";
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
        router.push({ pathname: "/survey", query: router.query });
      },
      data: { worker_id: workerID, session_id: sessionID },
    });
  };
  return (
    <Flex direction="column">
      <Box mb={4}>
        <Heading mb={1} size="lg">
          Introduction
        </Heading>
        <Text>
          We are conducting academic research looking at human aesthetic
          appreciation for beauty in nature -- in this case, butterflies.
        </Text>
      </Box>
      <Heading mb={1} size="lg">
        Instructions
      </Heading>
      <OrderedList mb={4}>
        <ListItem>
          Please enter your Worker ID to start. At the end of the survey you
          will receive your completion code. Enter the code back to your task
          page.
        </ListItem>
        <ListItem> There are 100 comparisons in this survey.</ListItem>
        <ListItem>
          For each comparison, go with your gut feeling, choose the butterfly
          you like better!
        </ListItem>
        <ListItem>
          If you pull up full-screen, 1920x1080 on a 21 inch monitor, these
          butterfly would appear as real size as they would show up in nature!
        </ListItem>
        <ListItem>
          {
            "At the end of the survey, you'll get to see a 'leader board' and butterfly names -- just for fun."
          }
        </ListItem>
        <ListItem>Hope you enjoy this!</ListItem>
      </OrderedList>

      <Heading mb={2} size="md">
        Enter your mTurk worker ID
      </Heading>
      <Input
        mb={2}
        width={400}
        value={workerID}
        onChange={handleChange}
        placeholder="Enter worker ID"
        size="sm"
      />
      <Button
        mr={2}
        width={400}
        colorScheme="blue"
        isDisabled={workerID === "" || workerID == null}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Flex>
  );
}
