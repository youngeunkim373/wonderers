import type { Meta, StoryObj } from "@storybook/react";

import { Heading } from "./Heading";
import { Box } from "@chakra-ui/react";

const meta: Meta<typeof Heading> = {
  title: "Example/Heading",
  component: Heading,
  tags: ["autodocs"],
  argTypes: {
    as: {
      // description: "필요할 경우에만 사용",
      table: {
        defaultValue: { summary: "h1" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    as: "h1",
    children: "Heading",
  },
};

export const Size: Story = {
  render: () => (
    <Box>
      <Heading as="h1">as: h1</Heading>
      <Heading as="h2">as: h2</Heading>
      <Heading as="h3">as: h3</Heading>
      <Heading as="h4">as: h4</Heading>
      <Heading as="h5">as: h5</Heading>
      <Heading as="h6">as: h6</Heading>
    </Box>
  ),
};
