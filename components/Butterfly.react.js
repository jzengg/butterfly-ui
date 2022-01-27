import { Container, Image, Flex } from "@chakra-ui/react";

export default function Butterfly({
  butterfly: { name, rating, image_url: imageUrl, id },
  imgSize = 400,
}) {
  return (
    <>
      <Image boxSize={`${imgSize}px`} src={imageUrl} />
      <Flex>Name: {name}</Flex>
      <Flex>ID: {id}</Flex>
      <Flex>Rating: {rating}</Flex>
    </>
  );
}
