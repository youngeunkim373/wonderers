import type {
  SystemStyleObject,
  SystemStyleFunction,
} from "@chakra-ui/styled-system";

const baseStyle: SystemStyleObject = {
  fontWeight: "normal",
  fontFamily: "body",
  borderRadius: "0.4rem",
};

const variantLink: SystemStyleFunction = (props) => {
  const { colorScheme: c } = props;

  if (c === "black") {
    return {
      color: "black.main",
    };
  }
  if (c === "gray") {
    return {
      color: "black.sub",
    };
  }
  if (c === "pink") {
    return {
      color: "pink.main",
    };
  }

  return {
    color: "black.main",
  };
};

const variantGhost: SystemStyleFunction = (props) => {
  const { colorScheme: c } = props;

  if (c === "black") {
    return {
      color: "black.main",
      _hover: {
        bg: "gray.200",
      },
    };
  }
  if (c === "gray") {
    return {
      color: "black.sub",
    };
  }
  if (c === "pink") {
    return {
      color: "pink.main",
    };
  }

  return {
    color: "black.main",
  };
};

const variantOutline: SystemStyleFunction = (props) => {
  const { colorScheme: c } = props;

  if (c === "black") {
    return {
      bg: "white",
      borderColor: "black.main",
      color: "black.main",
      _hover: {
        bg: "black.main",
        color: "white",
        _disabled: {
          bg: "black.third",
        },
      },
      _active: { bg: "primary-dark" },
    };
  }

  if (c === "gray") {
    return {
      bg: "white",
      borderColor: "black.sub",
      color: "black.sub",
      _hover: {
        bg: "black.sub",
        color: "white",
        _disabled: {
          bg: "black.third",
        },
      },
      _active: { bg: "primary-dark" },
    };
  }

  if (c === "pink") {
    return {
      bg: "white",
      borderColor: "pink.main",
      color: "pink.main",
      _hover: {
        bg: "pink.main",
        color: "white",
        _disabled: {
          bg: "pink.third",
        },
      },
      _active: { bg: "primary-dark" },
    };
  }

  return {
    border: "1px solid",
    borderColor: c === "warning" ? "info-increase" : "gray.400",
    color: "gray.900",
    bg: "white",
    _hover: {
      bg: "gray.100",
    },
    _active: {
      bg: "gray.100",
    },
  };
};

const variantSolid: SystemStyleFunction = (props) => {
  const { colorScheme: c } = props;

  if (c === "black-solid") {
    return {
      bg: "black",
      color: "white",
      _hover: {
        bg: "pink.main",
        _disabled: {
          bg: "black.third",
        },
      },
      _active: { bg: "pink.main" },
    };
  }

  if (c === "gray") {
    return {
      bg: "black.sub",
      color: "white",
      _hover: {
        bg: "gray.800",
        _disabled: {
          bg: "gray.300",
        },
      },
      _active: { bg: "gray.800" },
    };
  }

  if (c === "pink") {
    return {
      bg: "pink.main",
      color: "white",
      _hover: {
        bg: "pink.dark",
        _disabled: {
          bg: "gray.300",
        },
      },
      _active: { bg: "black.main" },
    };
  }

  return {
    bg: "black",
    color: "white",
    _hover: {
      bg: "pink.main",
      _disabled: {
        bg: "black.third",
      },
    },
    _active: { bg: "pink.main" },
  };
};

const variants = {
  link: variantLink,
  ghost: variantGhost,
  outline: variantOutline,
  solid: variantSolid,
  unstyled: null,
};

const sizes: Record<string, SystemStyleObject> = {
  lg: {
    h: 12,
    minW: 12,
    fontSize: "h6",
    px: 7,
    py: 5,
  },
  md: {
    h: 10,
    minW: 10,
    fontSize: "p",
    px: 4,
  },
  sm: {
    h: 8,
    minW: 8,
    fontSize: "small",
    px: 3,
  },
  //xs: null,
};

const defaultProps = {
  variant: "solid",
  size: "md",
  colorScheme: "black",
};

const Button = {
  baseStyle,
  variants,
  sizes,
  defaultProps,
};

export default Button;
