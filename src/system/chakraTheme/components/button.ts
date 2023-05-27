import type {
  SystemStyleObject,
  SystemStyleFunction,
} from "@chakra-ui/styled-system";

const baseStyle: SystemStyleObject = {
  fontWeight: "normal",
  fontFamily: "body",
};

const variantGhost: SystemStyleObject = {
  color: "gray.900",
  textDecoration: "underline",
  bg: "transparent",
  _hover: {
    bg: "gray.100",
  },
  _active: {
    bg: "gray.100",
  },
};

const variantOutline: SystemStyleFunction = (props) => {
  const { colorScheme: c } = props;
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

  if (c === "primary") {
    return {
      bg: "primary",
      color: "white",
      _hover: {
        bg: "primary-dark",
        _disabled: {
          bg: "primary",
        },
      },
      _active: { bg: "primary-dark" },
    };
  }

  if (c === "black") {
    return {
      bg: "gray.900",
      color: "white",
      _hover: {
        bg: "gray.800",
        _disabled: {
          bg: "gray.900",
        },
      },
      _active: { bg: "gray.800" },
    };
  }

  if (c === "gray") {
    return {
      bg: "gray.300",
      color: "gray.900",
      _hover: {
        bg: "gray.200",
        _disabled: {
          bg: "gray.300",
        },
      },
      _active: { bg: "gray.200" },
    };
  }

  if (c === "pink") {
    return {
      bg: "pink.main",
      color: "white",
      _hover: {
        bg: "primary-dark",
        _disabled: {
          bg: "primary",
        },
      },
      _active: { bg: "primary-dark" },
    };
  }

  return {
    bg: "gray.900",
    color: "white",
    _hover: {
      bg: "gray.800",
      _disabled: {
        bg: "gray.900",
      },
    },
    _active: { bg: "gray.800" },
  };
};

const variants = {
  ghost: variantGhost,
  outline: variantOutline,
  solid: variantSolid,
  link: null,
  unstyled: null,
};

const sizes: Record<string, SystemStyleObject> = {
  lg: {
    h: 12,
    minW: 12,
    fontSize: "lg",
    px: 5,
  },
  md: {
    h: 10,
    minW: 10,
    fontSize: "md",
    px: 4,
  },
  sm: {
    h: 8,
    minW: 8,
    fontSize: "sm",
    px: 3,
  },
  //xs: null,
};

const defaultProps = {
  variant: "solid",
  size: "md",
  colorScheme: "primary",
};

export default {
  baseStyle,
  variants,
  sizes,
  defaultProps,
};
