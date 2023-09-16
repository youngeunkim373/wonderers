import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';
import { Box } from '@chakra-ui/react';

const meta: Meta<typeof Text> = {
  title: 'Example/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    fontFamily: {
      table: {
        defaultValue: { summary: 'ibm-B' },
      },
    },
    as: {
      // description: "필요할 경우에만 사용",
      table: {
        defaultValue: { summary: 'p' },
      },
    },
    size: {
      description: "작은 글씨일 경우 'small' 사용 / 그 외 Chakra에서 제공하는 사이즈 사용",
      table: {
        defaultValue: { summary: 'p' },
      },
    },
    color: {
      table: {
        defaultValue: { summary: 'black.main' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: 'text',
  },
};

export const FontFamily: Story = {
  render: () => (
    <Box>
      <Text fontFamily="ibm-EL">fontFamily: ibm-EL</Text>
      <Text fontFamily="ibm-L">fontFamily: ibm-L</Text>
      <Text fontFamily="ibm-R">fontFamily: ibm-R</Text>
      <Text fontFamily="ibm-T">fontFamily: ibm-T</Text>
      <Text fontFamily="ibm-M">fontFamily: ibm-M</Text>
      <Text fontFamily="ibm-SB">fontFamily: ibm-SB</Text>
      <Text fontFamily="ibm-B">fontFamily: ibm-B</Text>
      <Text fontFamily="djh">fontFamily: djh(Eng only)</Text>
    </Box>
  ),
};

export const Color: Story = {
  render: () => (
    <Box>
      <Text color="black.main">color: black.main</Text>
      <Text color="black.sub">color: black.sub</Text>
      <Text color="black.third">color: black.third</Text>
      <Text color="pink.main">color: pink.main</Text>
      <Text color="pink.sub">color: pink.sub</Text>
      <Text color="pink.third">color: pink.third</Text>
    </Box>
  ),
};
