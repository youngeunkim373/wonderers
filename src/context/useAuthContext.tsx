import { createContext, useContext, useState, PropsWithChildren, useEffect } from 'react';
import { useRouter } from 'next/router';
import { mswApiHost } from '@/mocks/apiHost';
import axios from 'axios';

// @ts-ignore
const AuthContext = createContext<ReturnType<typeof useAuth>>(null);

function useAuth() {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);

  useEffect(() => {
    // 페이지 로드 시 로그인 상태 확인 또는 다른 로그인 상태 초기화 로직 추가
    if (typeof window !== 'undefined') {
      const accessToken = sessionStorage.getItem('accessToken');
      if (accessToken) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    }
  }, []);

  const logIn = async (userData: any) => {
    try {
      const response = await axios.post(`${mswApiHost}/login`, { userData });

      if (response.status === 200) {
        const responseData = response.data;
        sessionStorage.setItem('accessToken', responseData.accessToken);
        setIsLoggedIn(true);
        router.push('/');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data.message || '알 수 없는 오류가 발생했습니다.';
        // console.error(errorMessage);
        alert(errorMessage);
      }
    }
  };

  const silentRefresh = () => {
    if (typeof window !== 'undefined') {
      // 클라이언트 측에서만 실행되도록 확인
      // const storedRefreshToken = sessionStorage.getItem('refreshToken');
    }
  };

  const logOut = () => {
    if (typeof window !== 'undefined') {
      // 클라이언트 측에서만 실행되도록 확인
      sessionStorage.removeItem('accessToken');
      setIsLoggedIn(false);
      router.push('/');
    }
  };

  return {
    isLoggedIn,
    logIn,
    silentRefresh,
    logOut,
  };
}

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthContextProvider({ children }: PropsWithChildren) {
  const state = useAuth();

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
}
