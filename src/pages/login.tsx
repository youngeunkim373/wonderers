import { Box, Link } from "@chakra-ui/react";
import { Button, FormInput, FormInputPassword, PageTitle } from "@/stories";
import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const onIdHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };

  const onPwHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPw(event.target.value);
  };

  const onLoginHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(id + pw);

    event.preventDefault();
  };

  return (
    <>
      <Box p="10">
        <PageTitle title="로그인" />
        <Box w="50%" mx="auto">
          <FormInput
            label="아이디"
            inputProps={{
              type: "text",
              placeholder: "아이디",
              value: `${id}`,
              onChange: onIdHandler,
            }}
          />
          <FormInputPassword
            label="비밀번호"
            inputProps={{
              type: "password",
              placeholder: "비밀번호",
              value: `${pw}`,
              onChange: onPwHandler,
            }}
          />
          <Button size="lg" w="100%" mt="5" onClick={onLoginHandler}>
            로그인
          </Button>

          <Link href="/join">
            <Text mt="10" align="right" color="pink.main">
              회원가입
            </Text>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Login;
