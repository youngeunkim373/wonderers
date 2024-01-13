import { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Button, FormInputPassword, PageTitle, Link } from '@/stories';
import { FormControlInput } from '@/stories/FormInput';
import { useAuthContext } from '@/context/useAuthContext';

const Login = () => {
  const { logIn } = useAuthContext();

  const [userId, setUserId] = useState<string>('');
  const [userPw, setUserPw] = useState<string>('');

  const onChangeUserId = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUserId(event.target.value);
  const onChangeUserPw = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUserPw(event.target.value);

  const handleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    logIn({ id: userId, pw: userPw });
  };

  return (
    <Box p="10">
      <PageTitle title="로그인" />
      <Box w="50%" mx="auto">
        <form>
          <FormControlInput
            label="아이디"
            inputProps={{
              type: 'text',
              placeholder: '아이디',
              value: `${userId}`,
              onChange: onChangeUserId,
            }}
          />
          <FormInputPassword
            label="비밀번호"
            inputProps={{
              placeholder: '비밀번호',
              value: `${userPw}`,
              onChange: onChangeUserPw,
            }}
          />
          <Button size="lg" w="100%" mt="5" onClick={handleLogin}>
            로그인
          </Button>
        </form>

        <Flex mt="5" justify="flex-end">
          <Link href="/join" colorScheme="pink" size="lg">
            회원가입
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default Login;
