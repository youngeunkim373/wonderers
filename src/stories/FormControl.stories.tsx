import { useState } from "react";
import type { Meta } from "@storybook/react";
import {
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  FormControl,
  InputGroup,
  InputRightElement,
  IconButton,
  Button,
  Flex,
} from "@chakra-ui/react";
import { Select } from "./Select";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const meta: Meta<typeof FormControl> = {
  title: "Example/FormControl",
  component: FormControl,
  tags: ["autodocs"],
  argTypes: {
    isRequired: {
      options: ["true", "false"],
      table: {
        defaultValue: { summary: "false" },
      },
    },
    isError: {
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
};
export default meta;

export const Default = () => {
  return (
    <FormControl>
      <FormLabel>레이블</FormLabel>
      <Input type="text" placeholder="값을 입력해 주세요." />
    </FormControl>
  );
};

export const Readonly = () => {
  return (
    <FormControl isReadOnly>
      <FormLabel>레이블</FormLabel>
      <Input type="text" placeholder="수정할 수 없는 값입니다." />
    </FormControl>
  );
};

export const Required = () => {
  const handleSubmit = () => alert("중복 체크");

  return (
    <FormControl isRequired>
      <FormLabel>레이블</FormLabel>
      <Flex>
        <Input type="text" placeholder="값을 입력해 주세요." />
        <Button ml="2" size="md" colorScheme="pink" onClick={handleSubmit}>
          중복 체크
        </Button>
      </Flex>
    </FormControl>
  );
};
Required.storyName = "Required + Button";

export const Invalid = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const isError = input === "";

  return (
    <FormControl isInvalid={isError} isRequired>
      <FormLabel>이메일 주소</FormLabel>
      <Input type="email" value={input} onChange={handleInputChange} />
      {!isError ? (
        <FormHelperText>이메일 주소를 입력해 주세요.</FormHelperText>
      ) : (
        <FormErrorMessage>
          이메일 주소는 반드시 입력하셔야 합니다.
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export const PasswordShowHide = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  return (
    <FormControl isRequired>
      <FormLabel>비밀번호</FormLabel>
      <InputGroup size="md">
        <Input
          type={show ? "text" : "password"}
          placeholder="비밀번호를 입력하세요."
        />
        <InputRightElement width="4.5rem">
          <IconButton
            aria-label={show ? "hide" : "show"}
            h="1.75rem"
            size="sm"
            onClick={handleClick}
            icon={show ? <ViewOffIcon /> : <ViewIcon />}
          />
        </InputRightElement>
      </InputGroup>
      <FormHelperText>
        영어 대소문자, 숫자, 특수문자 포함 최소 8자리 이상
      </FormHelperText>
    </FormControl>
  );
};
PasswordShowHide.storyName = "Password Show/Hide";
