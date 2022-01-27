import React, { useState, useEffect, useCallback } from "react";
import axios from "../axiosUtils";
import Candidate from "../components/Candidate.react";
import { Center, SimpleGrid, Container, Image } from "@chakra-ui/react";
import { getMatchup } from "../apiUtils";

export default function Vote() {
  const [data, setData] = useState();
  useEffect(() => {
    getMatchup(setData);
  }, []);
  const refreshMatchup = useCallback(() => getMatchup(setData));

  const player = data?.player ?? {};
  const opponent = data?.opponent ?? {};
  return (
    <SimpleGrid columns={2} spacing={100}>
      <Candidate
        refreshMatchup={refreshMatchup}
        player={player}
        opponent={opponent}
      />
      <Candidate
        refreshMatchup={refreshMatchup}
        player={opponent}
        opponent={player}
      />
    </SimpleGrid>
  );
}
