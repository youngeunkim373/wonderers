import { useState } from "react";
import { Box, FormControl, VStack } from "@chakra-ui/react";
import {} from "@/stories/Forms.stories";
import { Button, Label, Input, FormInputInvalid } from "@/stories";

const Guide = () => {
  return (
    <>
      <VStack spacing="10" align="stretch" p="20">
        <Button>버튼</Button>

        <Label>레이블</Label>

        <Input type="text" placeholder="test" />

        <FormControl isRequired>
          <Label>레이블</Label>
          <Input type="text" placeholder="수정할 수 없는 값입니다." />
        </FormControl>

        <FormInputInvalid
          isRequired
          label="레이블"
          inputProps={{ type: "email" }}
        />
      </VStack>
    </>
  );
};

export default Guide;
