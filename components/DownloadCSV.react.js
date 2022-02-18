import { Button } from "@chakra-ui/react";
import { downloadData } from "../fileUtils";
import { useCallback } from "react";

export default function DownloadCSV({ filename, getData }) {
  const onClick = () => {
    getData({
      callback: (data) => {
        console.log(data);
        downloadData({ data, table: filename });
      },
    });
  };
  return <Button onClick={onClick}>Download CSV</Button>;
}
