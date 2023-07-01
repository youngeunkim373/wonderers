import type { Meta, StoryObj } from "@storybook/react";

import { ChakraButton as Button } from "./Button";
// import { Button } from "@chakra-ui/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
// ref) https://storybook.js.org/blog/improved-type-safety-in-storybook-7/
// const meta = {
//   title: "Example/Button",
//   component: Button,
//   tags: ["autodocs"],
// } satisfies Meta<typeof Button>;

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
  args: {
    variant: "solid",
    size: "md",
    colorScheme: "black",
    children: "Default Button",
  },
};

// export const Size: Story<typeof Button> = () => <Button>size</Button>;

export const Size: Story = {
  // args: {
  //   variant: "solid",
  //   size: "md",
  //   colorScheme: "black",
  //   children: "Default Button",
  // },
  render: () => <Button variant="solid">??</Button>,
};
