import type { Meta, StoryObj } from "@storybook/react";

import { ChakraButton as Button } from "./Button";
// import { Button } from "@chakra-ui/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  // argTypes: {
  //   size: {
  //     control: "radio",
  //     options: ["lg", "md", "sm", "xs"],
  //     description: "xs는 쓰지마시오",
  //     default: "md",
  //   },
  //   children: {
  //     control: "text",
  //   },
  // },
  // args: {
  //   size: "md",
  //   children: "button",
  // },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    variant: "solid",
    size: "md",
    colorScheme: "black",
    children: "Default Button",
  },
};

export const Size: Story = {
  args: {
    size: "lg",
    children: "size",
  },
};

// export const Size: Story = {
//   args: {
//     size: "lg",
//     children: "size",
//   },
//   render: () => <Button></Button>,
// };
