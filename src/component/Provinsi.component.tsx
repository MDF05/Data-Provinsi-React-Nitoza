import { useEffect, useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { Provinsi } from "../DTO/provinsi.dto";
import axios from "axios";
import { KabKota } from "@/DTO/KabKota.dto";

export default function ProvinsiComponent({ data }: { data: Provinsi }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [kabKota, setKabKota] = useState<KabKota[]>([]);
  const kota = kabKota.filter((data) => {
    const word1 = data.name.split(" ");

    if (word1[0] == "KOTA") return data;
  });

  const kabupaten = kabKota.filter((data) => {
    const word1 = data.name.split(" ");

    if (word1[0] == "KABUPATEN") return data;
  });

  useEffect(() => {
    async function getkabKota() {
      const response = await axios.get(
        `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${data.id}.json`
      );
      setKabKota(response.data);
    }
    getkabKota();
  }, [data.id]);

  console.log(kabKota);

  return (
    <Box
      mb={4}
      p={4}
      border="1px solid #ddd"
      borderRadius="md"
      bg="black"
      boxShadow="md"
    >
      <Button
        w="full"
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        _expanded={{ bg: "blue.500", color: "white" }}
      >
        <Text fontSize="lg" fontWeight="bold" color="blue.600">
          {data.name}
        </Text>
      </Button>

      {isOpen && (
        <Box
          mt={2}
          display={"flex"}
          justifyContent={"space-between"}
          paddingX={"50px"}
        >
          <Text fontSize="md" color="gray.700">
            <strong>Kabupaten: </strong>
            {kabupaten.map((data) => {
              return <Text>{data.name}</Text>;
            })}
          </Text>
          <Text fontSize="md" color="gray.700">
            <strong>Kota: </strong>
            {kota.map((data) => {
              return <Text>{data.name}</Text>;
            })}
          </Text>
        </Box>
      )}
    </Box>
  );
}
