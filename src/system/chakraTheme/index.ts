import { extendTheme } from "@chakra-ui/react";
import styles from "./styles";
import foundations from "./foundations";
import customComponents from "./components";

/**
 * reference
 * https://github.com/vercel/next.js/blob/canary/examples/with-chakra-ui/src/theme.tsx
 * https://github.com/psg1106/Chakra-UI/blob/4c9965d9e6/packages/theme/src/index.ts
 */
const overrides = {
  styles,
  ...foundations,
  components: customComponents,
  textStyles: {
    h1: {
      fontSize: "50px",
    },
  },
};

export default extendTheme(overrides);
