import type { Meta } from "@storybook/react";
import { FormControl, Input } from ".";

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
  },
};
export default meta;

export const FormControlStory = () => {
  return (
    <FormControl label="레이블">
      <Input type="text" />
    </FormControl>
  );
};
FormControlStory.storyName = "FormControl";

export const FormControlIsRequiredStory = () => {
  return (
    <FormControl isRequired label="레이블">
      <Input type="text" />
    </FormControl>
  );
};
FormControlIsRequiredStory.storyName = "- isRequired";

export const FormControlIsReadOnlyStory = () => {
  return (
    <FormControl isReadOnly label="레이블">
      <Input type="text" placeholder="수정할 수 없는 값입니다." />
    </FormControl>
  );
};
FormControlIsReadOnlyStory.storyName = "- isReadOnly";
