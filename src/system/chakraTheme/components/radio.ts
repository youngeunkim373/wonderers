const baseStyle = {
  control: {
    border: "1px solid",
    borderColor: "black.main",
    _checked: {
      bg: "white",
      borderColor: "black.main",
      color: "pink.main",
      _hover: {
        bg: "white",
      },
    },
    _disabled: {
      pos: "relative",
      bg: "white",
      borderColor: "black.third",
      _before: {
        content: `""`,
        display: "inline-block",
        pos: "relative",
        w: "50%",
        h: "50%",
        borderRadius: "50%",
        bg: "pink.third",
      },
    },
  },
};

const label = {
  _disabled: { opacity: 0.7 },
};

const defaultProps = {
  size: "md",
};

const Radio = {
  baseStyle,
  label,
  defaultProps,
};

export default Radio;
