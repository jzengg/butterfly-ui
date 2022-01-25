import React, { useState, useEffect } from "react";
import axios from "../axiosUtils";
import Candidate from "../components/Candidate.react";
import { Center, SimpleGrid, Container, Image } from "@chakra-ui/react";

export default function Vote() {
  const [data, setData] = useState();
  useEffect(() => {
    const response = axios({
      method: "post",
      url: "/match",
    })
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);
  const player = data?.player ?? {};
  const opponent = data?.opponent ?? {};
  return (
    <Center>
      <SimpleGrid columns={2} spacing={100}>
        <Candidate player={player} opponent={opponent} />
        <Candidate player={opponent} opponent={player} />
      </SimpleGrid>
    </Center>
  );
}
