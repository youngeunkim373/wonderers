const baseStyle = {
  color: "black.main",
  lineHeight: "tall",
};

const sizes = {
  "2xs": "0.55rem",
  xs: "0.6rem",
  sm: "0.65rem",
  md: "0.7rem",
  lg: "0.75rem",
  xl: "0.8rem",
  "2xl": "0.9rem",
  "3xl": "1rem",
  "4xl": "1.1rem",
  "5xl": "1.2rem",
  "6xl": "1.3rem",
  "7xl": "1.4rem",
  "8xl": "1.5rem",
  "9xl": "1.6rem",

  p: {
    fontSize: "p",
  },
  small: {
    fontSize: "small",
  },
};

const Text = {
  baseStyle,
  sizes,
  defaultProps: {
    size: "p",
  },
};

export default Text;
