import { Container, Image, Flex } from "@chakra-ui/react";
import useIsDev from "../hooks/useIsDev";

export default function Butterfly({
  butterfly: { name, rating, image_url: imageUrl, id },
  imgSize = 726,
  showName = false,
}) {
  const isDev = useIsDev();
  return (
    <>
      <Image
        boxSize={[imgSize / 2.7, imgSize / 2.5, imgSize / 2, imgSize]}
        src={imageUrl}
      />
      {showName && <Flex>{name}</Flex>}
      {isDev && (
        <>
          <Flex>ID: {id}</Flex>
          <Flex>Rating: {rating}</Flex>
        </>
      )}
    </>
  );
}
