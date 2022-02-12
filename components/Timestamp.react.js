import { Text } from "@chakra-ui/react";

export default function Timestamp({ dateString }) {
  const localDate = new Date(dateString);
  return (
    <Text color="gray.500" mr={1}>
      {localDate.toString()}
    </Text>
  );
}
