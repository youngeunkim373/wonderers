import { mode, Styles } from "@chakra-ui/theme-tools";

const styles: Styles = {
  global: (props) => ({
    "html, body": {
      height: "100%",
      margin: "0",
      padding: "0",
      fontSize: ["16px", "16px", "16px", "18px", "20px"], // mobile(768): 16px / tablet(1024): 18px / pc(1200): 20px
    },
    body: {
      // color: mode("gray.900", "whiteAlpha.900")(props),
      // bg: mode("white", "gray.900")(props),
      color: "black.main",
      bg: "chakra-body-bg",
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "tall",
      letterSpacing: "tight",
    },
    a: {
      color: "inherit",
      textDecoration: "none",
    },
    "*": {
      boxSizing: "border-box",
    },
    "*::placeholder": {
      //color: mode("gray.400", "whiteAlpha.400")(props),
      color: "chakra-placeholder-color",
    },
    "*, *::before, &::after": {
      //borderColor: mode("gray.200", "whiteAlpha.300")(props),
      borderColor: "chakra-border-color",
      wordWrap: "break-word",
    },
    "#__next": {
      height: "100%",
    },
    ".content-base": {
      minHeight: "calc(100% - 52px)", // -footer height
    },
  }),
};

export default styles;
