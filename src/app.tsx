import { Container } from "@chakra-ui/react";
import InputComponent from "./component/Input.component";
import BurgerComponent from "./component/Burger.component";
import { useState } from "react";

export function App() {
  const [topPos, setTopPos] = useState<string>("-100vh");

  return (
    <Container
      fluid
      display={"grid"}
      paddingX={"50px"}
      //   h={"100vh"}
      w={"100%"}
      bg={"black"}
      position={"relative"}
    >
      <InputComponent setTopPost={setTopPos}></InputComponent>
      <BurgerComponent topPos={topPos} setTopPos={setTopPos}></BurgerComponent>
    </Container>
  );
}
