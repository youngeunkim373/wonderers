const variants = {
  outline: {
    field: {
      borderColor: "black.main",
      _hover: {
        borderColor: "black.main",
      },
      _readOnly: {
        borderColor: "black.sub",
        backgroundColor: "#f2f2f2",
        _focus: {
          borderColor: "black.sub",
        },
      },
    },
  },
};

const defaultProps = {
  focusBorderColor: "pink.main",
  errorBorderColor: "blue.main",
};

const Select = {
  variants,
  defaultProps,
};

export default Select;
