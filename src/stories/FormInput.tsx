import {
  Flex,
  FormControl,
  FormControlProps,
  InputProps,
  ButtonProps,
  FormHelperText,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { Label } from ".";
import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

interface CustomFormControlProps extends FormControlProps {
  isRequired?: boolean;
  isReadOnly?: boolean;
  isInvalid?: boolean;
  label?: string;
  children?: React.ReactNode;
  helperText?: string;
  errorMessage?: string;
}

interface CustomInputProps extends InputProps {
  inputProps: {
    type?: string;
    value?: string;
    placeholder?: string;
    onChange?: () => void;
  };
}

interface CustomButtonProps extends ButtonProps {
  buttonProps: {
    name: string;
    colorScheme?: string;
    onClick?: () => void;
  };
}

export const formInput = ({
  inputProps,
  ...props
}: CustomFormControlProps & CustomInputProps) => {
  return (
    <FormControl {...props}>
      {props.label !== "" && <Label>{props.label}</Label>}
      <Input {...inputProps} />
    </FormControl>
  );
};

export const formInputWithButton = ({
  inputProps,
  buttonProps,
  ...props
}: CustomFormControlProps & CustomInputProps & CustomButtonProps) => {
  return (
    <FormControl {...props}>
      {props.label !== "" && <Label>{props.label}</Label>}
      <Flex>
        <Input {...inputProps} />
        <Button
          ml="2"
          size="md"
          colorScheme={`${!buttonProps.colorScheme && "pink"}`}
          {...buttonProps}
        >
          {buttonProps.name}
        </Button>
      </Flex>
    </FormControl>
  );
};

export const formInputInvalid = ({
  inputProps,
  ...props
}: CustomFormControlProps & CustomInputProps) => {
  const [input, setInput] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const isError = input === "";

  return (
    <FormControl {...props} isInvalid={isError}>
      {props.label !== "" && <Label>{props.label}</Label>}
      <Input value={input} onChange={handleInputChange} {...inputProps} />
      {!isError ? (
        <FormHelperText>{props.helperText}</FormHelperText>
      ) : (
        <FormErrorMessage>{props.errorMessage}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export const formInputPassword = ({
  inputProps,
  ...props
}: CustomFormControlProps & CustomInputProps) => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  return (
    <FormControl {...props}>
      {props.label !== "" && <Label>{props.label}</Label>}
      <InputGroup size="md">
        <Input
          type={show ? "text" : "password"}
          placeholder={inputProps.placeholder}
        />
        <InputRightElement width="4.5rem">
          <IconButton
            aria-label={show ? "hide" : "show"}
            h="1.75rem"
            size="sm"
            onClick={handleClick}
            icon={show ? <ViewOffIcon /> : <ViewIcon />}
          />
        </InputRightElement>
      </InputGroup>
      <FormHelperText>{props.helperText}</FormHelperText>
    </FormControl>
  );
};
