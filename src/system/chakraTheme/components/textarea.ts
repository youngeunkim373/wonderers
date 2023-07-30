import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const outline = defineStyle({
  borderColor: "black.main",
  _hover: {
    borderColor: "black.main",
  },
});

const textarea = defineStyleConfig({
  variants: { outline },
});

const defaultProps = {
  focusBorderColor: "pink.main",
  errorBorderColor: "blue.main",
};

const Textarea = {
  ...textarea,
  defaultProps,
};

export default Textarea;
