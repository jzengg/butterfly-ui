import React, { useState, useEffect } from "react";
import axios from '../axiosUtils'

export default function Vote() {
  const [data, setData] = useState();
  useEffect(() => {
    // Update the document title using the browser API
    const response = axios({
      method: "post",
      url: "/match",
    }).then(response => setData(response.data)).catch(error => console.log(error));
  }, []);

  const player = data?.player
  const opponent = data?.opponent
  return <div>{player?.name} {player?.rating}</div>;
}
