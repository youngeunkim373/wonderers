const baseStyle = {
  control: {
    borderColor: "black.main",
    border: "1px solid",
    _checked: {
      bg: "white",
      borderColor: "black.main",
      color: "pink.main",
      _hover: {
        bg: "white",
      },
    },
  },
};

const defaultProps = {
  size: "md",
};

const Checkbox = {
  baseStyle,
  defaultProps,
};

export default Checkbox;
