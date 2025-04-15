import { getProvinsi } from "../stores/Provinsi/provinsi.async";
import { inputSchema, InputSchema } from "../schemas/input.schemas";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../stores/store";

export default function InputComponent({
  setTopPost,
}: {
  setTopPost: React.Dispatch<React.SetStateAction<string>>;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputSchema>({ resolver: zodResolver(inputSchema) });

  const dispatch = useAppDispatch();

  async function handleInputSubmit(data: InputSchema) {
    setTopPost("0");
    await dispatch(getProvinsi(data.counterProv));
  }

  return (
    <Box
      as="form"
      onSubmit={handleSubmit(handleInputSubmit)}
      display="flex"
      gap="2"
      flexWrap="wrap"
      w="100%"
    >
      <Text
        fontSize="xxx-large"
        fontWeight="bold"
        color="gray.200"
        p={4}
        w={"full"}
        textAlign={"center"}
      >
        Data Provinsi Indonesia
      </Text>

      <Box w={"100%"} display={"flex"}>
        <Box flex="1">
          <Input
            type="number"
            {...register("counterProv", { valueAsNumber: true, value: 0 })}
            placeholder="min 1 - max 34"
          />
          {errors.counterProv && (
            <Box color="red.500" fontSize="sm">
              {errors.counterProv.message}
            </Box>
          )}
        </Box>
        <Button type="submit" flexShrink={0}>
          Find
        </Button>
      </Box>
    </Box>
  );
}
