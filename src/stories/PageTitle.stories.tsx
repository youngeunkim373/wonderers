import type { Meta, StoryObj } from "@storybook/react";

import { PageTitle } from "./";

const meta: Meta<typeof PageTitle> = {
  title: "Example/PageTitle",
  component: PageTitle,
  tags: ["autodocs"],
  argTypes: {
    lineHeight: {
      // description: "필요할 경우에만 사용",
      table: {
        defaultValue: { summary: "1" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DefaultPageTitle: Story = {
  args: {
    title: "The page title.",
    subtitle: "This is an area for subtitles.",
  },
};
DefaultPageTitle.storyName = "Default";

export const NoSubtitle: Story = {
  args: {
    title: "The page title.",
  },
};
