import type { Meta, StoryObj } from '@storybook/react';

import { Link } from '.';
import { Flex } from '@chakra-ui/react';

const meta: Meta<typeof Link> = {
  title: 'Example/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    colorScheme: {
      table: {
        defaultValue: { summary: 'black' },
      },
    },
    fontSize: {
      table: {
        defaultValue: { summary: 'md' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Color: Story = {
  render: () => (
    <Flex columnGap="5">
      <Link colorScheme="black">colorScheme: black</Link>
      <Link colorScheme="pink">colorScheme: pink</Link>
      <Link colorScheme="gray">colorScheme: gray</Link>
    </Flex>
  ),
};

export const Size: Story = {
  render: () => (
    <Flex columnGap="5">
      <Link fontSize="lg">fontSize: lg</Link>
      <Link fontSize="md">fontSize: md</Link>
      <Link fontSize="sm">fontSize: sm</Link>
    </Flex>
  ),
};
