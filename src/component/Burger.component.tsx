import { useAppSelector } from "../stores/store";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import ProvinsiComponent from "./Provinsi.component";

export default function BurgerComponent({
  topPos,
  setTopPos,
}: {
  topPos: string;
  setTopPos: React.Dispatch<React.SetStateAction<string>>;
}) {
  const Provinsi = useAppSelector((state) => state.provinsi);

  return (
    <Flex
      h={"100vh"}
      flexDirection={"column"}
      width={"100%"}
      position={"fixed"}
      top={0}
      right={0}
      transform={`translateY(${topPos})`}
      transition="transform 1s ease-in-out"
      justifyContent={"center"}
      alignItems={"center"}
      bg={"black"}
    >
      <Flex
        justifyItems={"end"}
        w={"full"}
        justifyContent={"end"}
        p={"5px 20px 0px 0px"}
        h={"50px"}
        boxSizing={"border-box"}
      >
        <Button
          w="20px"
          fontSize="30px"
          justifyContent="center "
          pe="20px"
          variant="outline"
          color="red.500"
          borderColor="red.500"
          _hover={{ bg: "red.500", color: "white" }}
          display={"flex"}
          rounded={"10px"}
          onClick={() => setTopPos("-100vh")}
        >
          X
        </Button>
      </Flex>
      <Flex w={"full"} h={"50px)"}>
        <Text
          fontSize="x-large"
          fontWeight="bold"
          color="gray.200"
          p={4}
          w={"full"}
          textAlign={"center"}
        >
          Data {Provinsi.data.length} Provinsi Indonesia
        </Text>
      </Flex>
      <Box
        w={"full"}
        h={"calc(100% - 100px)"}
        overflow={"auto"}
        bg={"gray.800"}
        p={"20px"}
        borderRadius={"20px"}
      >
        {Provinsi.data.map((data, index) => {
          return (
            <ProvinsiComponent data={data} key={index}></ProvinsiComponent>
          );
        })}
      </Box>
    </Flex>
  );
}
