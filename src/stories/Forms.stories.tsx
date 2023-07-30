import type { Meta } from "@storybook/react";
import {
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Switch,
  Textarea,
} from "@chakra-ui/react";
import { Select } from "./Select";
import { useState } from "react";

const meta: Meta<typeof FormControl> = {
  title: "Example/Forms",
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
  return <Input type="text" placeholder="값을 입력해 주세요." />;
};
Default.storyName = "Input";

export const Label = () => {
  return <FormLabel>레이블</FormLabel>;
};

export const SelectStory = () => {
  return (
    <Select placeholder="옵션을 선택해 주세요.">
      <option>옵션 1</option>
      <option>옵션 2</option>
      <option>옵션 3</option>
      <option>옵션 4</option>
      <option>옵션 5</option>
    </Select>
  );
};
SelectStory.storyName = "Select";

export const CheckboxStory = () => {
  return (
    <CheckboxGroup colorScheme="green" defaultValue={["naruto", "kakashi"]}>
      <Stack spacing="5" direction="row">
        <Checkbox value="naruto">Naruto</Checkbox>
        <Checkbox value="sasuke">Sasuke</Checkbox>
        <Checkbox value="kakashi">Kakashi</Checkbox>
      </Stack>
    </CheckboxGroup>
  );
};
CheckboxStory.storyName = "Checkbox";

export const RadioStory = () => {
  const [value, setValue] = useState("1");
  return (
    <RadioGroup onChange={setValue} value={value}>
      <Stack spacing="5" direction="row">
        <Radio value="1">First</Radio>
        <Radio value="2">Second</Radio>
        <Radio value="3">Third</Radio>
      </Stack>
      <Radio value="4" isDisabled mt="5" colorScheme="pink.main">
        Checked Already
      </Radio>
    </RadioGroup>
  );
};
RadioStory.storyName = "Radio";

export const SwitchStory = () => {
  return (
    <FormControl display="flex" alignItems="center">
      <FormLabel htmlFor="email-alerts" mb="0">
        Enable email alerts?
      </FormLabel>
      <Switch id="email-alerts" size="md" />
    </FormControl>
  );
};
SwitchStory.storyName = "Switch";

export const TextareaStory = () => {
  return <Textarea placeholder="Here is a sample placeholder" />;
};
TextareaStory.storyName = "Textarea";
