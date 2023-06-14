import type { Preview } from "@storybook/react";
import customTheme from "../src/system/chakraTheme";

const preview: Preview = {
  parameters: {
    chakra: {
      theme: customTheme,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
