import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
import { Flex } from "@chakra-ui/react";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    size: {
      table: {
        defaultValue: { summary: "md" },
      },
    },
    colorScheme: {
      table: {
        defaultValue: { summary: "black" },
      },
    },
    variant: {
      // description: "필요할 경우에만 사용",
      table: {
        defaultValue: { summary: "solid" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: "Default Button",
  },
};

export const Size: Story = {
  render: () => (
    <Flex columnGap="5">
      <Button size="lg">size: lg</Button>
      <Button size="md">size: md</Button>
      <Button size="sm">size: sm</Button>
    </Flex>
  ),
};

export const ColorScheme: Story = {
  render: () => (
    <Flex columnGap="5">
      <Button colorScheme="black">colorScheme: black</Button>
      <Button colorScheme="pink">colorScheme: pink</Button>
      <Button colorScheme="gray">colorScheme: gray</Button>
    </Flex>
  ),
};

export const Variant: Story = {
  render: () => (
    <Flex columnGap="5">
      <Button variant="solid">variant: solid</Button>
      <Button variant="outline">variant: outline</Button>
      <Button variant="ghost">colorScheme: ghost</Button>
      <Button variant="link">colorScheme: link</Button>
    </Flex>
  ),
};
