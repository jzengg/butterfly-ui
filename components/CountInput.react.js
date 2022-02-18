import { NumberInput, NumberInputField, Text, Button } from "@chakra-ui/react";
import { useCallback, useState } from "react";

export default function CountInput({ count, setCount, defaultCount }) {
  const [value, setValue] = useState(defaultCount);
  const onChange = useCallback(
    (valueAsString, valueAsNumber) => {
      if (valueAsString == null || valueAsString === "") {
        setValue("");
      } else {
        setValue(valueAsNumber);
      }
    },
    [setValue]
  );
  return (
    <>
      <Text>Number of matches to show</Text>
      <NumberInput
        mb={1}
        value={value}
        onChange={onChange}
        inputMode="numeric"
        min={1}
        max={500}
      >
        <NumberInputField />
      </NumberInput>
      <Button onClick={() => setCount(value)}>Update</Button>
    </>
  );
}
