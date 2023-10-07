import { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Button, FormInputPassword, PageTitle, Link } from '@/stories';
import { FormControlInput } from '@/stories/FormInput';
import { mswApiHost } from '@/mocks/apiHost';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  const [userId, setUserId] = useState<string | undefined>('');
  const [userPw, setUserPw] = useState<string | undefined>('');

  const onChangeUserId = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUserId(event.target.value);
  const onChangeUserPw = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUserPw(event.target.value);

  const handlLogin = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(`${mswApiHost}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, userPw }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.token);
        // router.push('/');
        // + 메뉴에서 로그아웃으로 변경
      } else {
        const errorData = await response.json();
        alert(errorData.error);
      }
    } catch (error) {
      console.error(error);
    }
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
              type: 'password',
              placeholder: '비밀번호',
              value: `${userPw}`,
              onChange: onChangeUserPw,
            }}
          />
          <Button size="lg" w="100%" mt="5" onClick={handlLogin}>
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
