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
} from '@chakra-ui/react';
import { Label } from '.';
import { Button, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

interface CustomFormControlProps extends FormControlProps {
  isRequired?: boolean;
  isReadOnly?: boolean;
  isInvalid?: boolean;
  label?: string;
  children?: React.ReactNode;
  helperText?: string;
  errorMessage?: string;
  inputProps?: InputProps;
  buttonProps?: ButtonProps & { children?: React.ReactNode };
}

export const FormControlInput = ({ ...props }: CustomFormControlProps & InputProps) => {
  const { inputProps } = props;
  return (
    <FormControl {...props} mt="5">
      {props.label !== '' && <Label>{props.label}</Label>}
      <Input {...inputProps} />
    </FormControl>
  );
};

export const FormControlInputWithButton = ({ ...props }: CustomFormControlProps) => {
  const { inputProps, buttonProps } = props;

  return (
    <FormControl {...props} mt="5">
      {props.label && <Label>{props.label}</Label>}
      <Flex>
        <Input {...inputProps} />
        {buttonProps && (
          <Button ml="2" size="md" colorScheme={buttonProps.colorScheme || 'pink'} {...buttonProps}>
            {buttonProps.children}
          </Button>
        )}
      </Flex>
    </FormControl>
  );
};

export const FormControlInputInvalid = ({ ...props }: CustomFormControlProps) => {
  const { inputProps } = props;

  const [input, setInput] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const isError = input === '';

  return (
    <FormControl {...props} isInvalid={isError} mt="5">
      {props.label !== '' && <Label>{props.label}</Label>}
      <Input value={input} onChange={handleInputChange} {...inputProps} />
      {!isError ? (
        <FormHelperText>{props.helperText}</FormHelperText>
      ) : (
        <FormErrorMessage>{props.errorMessage}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export const FormControlInputPassword = ({ ...props }: CustomFormControlProps) => {
  const { inputProps } = props;

  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  return (
    <FormControl {...props} mt="5">
      {props.label !== '' && <Label>{props.label}</Label>}
      <InputGroup size="md">
        {inputProps && (
          <Input type={show ? 'text' : 'password'} placeholder={inputProps.placeholder} />
        )}
        <InputRightElement width="4.5rem" pr="0.4rem" justifyContent="flex-end">
          <IconButton
            aria-label={show ? 'hide' : 'show'}
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
