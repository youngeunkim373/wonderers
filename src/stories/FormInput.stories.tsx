import type { Meta } from "@storybook/react";
import {
  FormInput,
  FormInputWithButton,
  FormInputInvalid,
  FormInputPassword,
} from ".";

const meta: Meta<typeof FormInput> = {
  title: "Example/FormInput",
  component: FormInput,
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

export const FormInputStory = () => {
  return (
    <FormInput
      label="레이블"
      inputProps={{
        type: "text",
        placeholder: "값을 입력하세요",
      }}
    />
  );
};
FormInputStory.storyName = "Form Input";

export const FormInputWithButtonStory = () => {
  const handleSubmit = () => alert("중복 체크");

  return (
    <FormInputWithButton
      label="레이블"
      inputProps={{ type: "text", placeholder: "값을 입력하세요" }}
      buttonProps={{ name: "중복 체크", onClick: handleSubmit }}
    />
  );
};
FormInputWithButtonStory.storyName = "Form Input with Button";

export const FormInputPasswordStory = () => {
  return (
    <FormInputPassword
      label="비밀번호"
      inputProps={{ placeholder: "비밀번호를 입력하세요." }}
      helperText="영어 대소문자, 숫자, 특수문자 포함 최소 8자리 이상"
    />
  );
};
FormInputPasswordStory.storyName = "Form Password";

export const FormInputInvalidStory = () => {
  return (
    <FormInputInvalid
      label="이메일 주소"
      inputProps={{ type: "email" }}
      helperText="이메일 주소를 입력해 주세요."
      errorMessage="이메일 주소는 반드시 입력하셔야 합니다."
    />
  );
};
FormInputInvalidStory.storyName = "- isInvalid";
