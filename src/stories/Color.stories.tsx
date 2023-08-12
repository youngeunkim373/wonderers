import type { Meta, StoryObj } from "@storybook/react";

import { Flex, Circle, Box, Text } from "@chakra-ui/react";

const meta: Meta<typeof Circle> = {
  title: "Example/Color",
  component: Circle,
  tags: ["autodocs"],
  argTypes: {
    color: {
      description: "color, colorSchema, bg",
      options: ["black.main", "black.sub", "black.third"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = () => {
  return (
    <Flex>
      <Flex align="center" justify="center" gap="3">
        <Circle size="6rem" bg="black.main">
          <Text color="white">
            black.main <br /> #000000
          </Text>
        </Circle>
        <Circle size="6rem" bg="black.sub">
          <Text color="white">
            black.sub <br /> #909090
          </Text>
        </Circle>
        <Circle size="6rem" bg="black.third">
          <Text color="black">
            black.third <br /> #cccccc
          </Text>
        </Circle>

        <Circle size="6rem" bg="pink.main" ml="5">
          <Text color="white">
            pink.main <br /> #FF007C
          </Text>
        </Circle>
        <Circle size="6rem" bg="pink.sub">
          <Text color="white">
            pink.sub <br /> #FF99CB
          </Text>
        </Circle>
        <Circle size="6rem" bg="pink.third">
          <Text color="black">
            pink.third <br /> #FFCDE5
          </Text>
        </Circle>
      </Flex>
    </Flex>
  );
};
