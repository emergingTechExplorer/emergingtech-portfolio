import {
  AspectRatio,
  Box,
  Container,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import ReactPlayer from "react-player";

const WorkShopsPage = () => {
  return (
    <Container maxW={"1300px"} px={4} py={10}>
      <SimpleGrid columns={4} gap={6} w={"full"}>
        <Box
          shadow={"lg"}
          rounded={"lg"}
          overflow={"hidden"}
          transition={"all 0.3s"}
          _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
          bg={"gray.400"}
        >
          <Heading as={"h2"} fontSize={"lg"} textAlign={"center"}>
            Yocto Project Summit 2021 December
          </Heading>
          <AspectRatio maxW="500px" ratio={1}>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/OHT9f_NOEpA?rel=0&modestbranding=1"
              allowFullScreen
            />
          </AspectRatio>
        </Box>
        <Box
          shadow={"lg"}
          rounded={"lg"}
          overflow={"hidden"}
          transition={"all 0.3s"}
          _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
          bg={"gray.400"}
        >
          <Heading as={"h2"} fontSize={"lg"} textAlign={"center"}>
            Docker Community All-Hands #6 2022 September
          </Heading>
          <AspectRatio maxW="500px" ratio={1}>
            <iframe
              title="YouTube video player"
              src="https://www.youtube.com/embed/ywDz1uLvZpE?si=xJN8-TCuPwy1i2-I?rel=0&modestbranding=1"
              allowFullScreen
            />
          </AspectRatio>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default WorkShopsPage;
