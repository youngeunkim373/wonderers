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
      fontSize: "1.5rem",
      fontFamily: "ibm-M",
    },
    h2: {
      fontSize: "1.3rem",
      fontFamily: "ibm-M",
    },
    h3: {
      fontSize: "1.2rem",
      fontFamily: "ibm-M",
    },
    h4: {
      fontSize: "1.1rem",
      fontFamily: "ibm-M",
    },
    h5: {
      fontSize: "1.0rem",
      fontFamily: "ibm-M",
    },
    h6: {
      fontSize: "0.9rem",
      fontFamily: "ibm-M",
    },
    subTit: {
      color: "black.sub",
    },
  },
};

export default extendTheme(overrides);
