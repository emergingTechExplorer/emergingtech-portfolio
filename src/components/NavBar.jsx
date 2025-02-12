import {
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Container maxW={"1300px"} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Heading as={"h1"} fontSize={"2xl"}>
          <Link to={"/"}>Lakshantha's Portfolio</Link>
        </Heading>

        <HStack>
          <Button>
            <Link to={"/workshops"}>Workshops</Link>
          </Button>
          <Button>
            <Link to={"/about"}>About me</Link>
          </Button>
          <ColorModeButton />
        </HStack>
      </Flex>
    </Container>
  );
};

export default NavBar;
