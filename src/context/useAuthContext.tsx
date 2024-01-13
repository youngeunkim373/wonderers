import { createContext, useContext, useState, PropsWithChildren, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { ExtendSessionData, LoginBodyDTO } from '@/domain/service/auth/auth.interface';

// @ts-ignore
const AuthContext = createContext<ReturnType<typeof useAuth>>(null);

function useAuth() {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) silentRefresh();
    }
  }, []);

  const logIn = async (body: LoginBodyDTO) => {
    try {
      const response = await axios.post('http://localhost:7737/api/login', body);

      if (response.status === 200) {
        const { accessToken, refreshToken } = response.data;

        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        extendSession({ accessToken, refreshToken });
        router.push('/');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data.message || '알 수 없는 오류가 발생했습니다.';
      }
    }
  };

  const extendSession = (data: ExtendSessionData) => {
    const { accessToken, refreshToken } = data;

    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);

    setIsLoggedIn(true);

    // setTimeout(silentRefresh, 58 * 1000); // 테스트용 58초
    setTimeout(silentRefresh, (1800 - 30) * 1000); // 29.5분
  };

  const silentRefresh = async () => {
    try {
      if (typeof window !== 'undefined') {
        const storedRefreshToken = localStorage.getItem('refreshToken');

        const response = await axios.post('http://localhost:7737/api/refresh', {
          refreshToken: storedRefreshToken,
        });

        const responseData = response.data;
        extendSession(responseData);
      }
    } catch (error) {
      const isAxiosError = axios.isAxiosError(error);
      if (isAxiosError && (error.response?.status === 403 || error.response?.status === 401)) {
        // todo: 스낵바 UI 붙이기(포탈)
        logOut();
        router.push('/');
      }
    }
  };

  const logOut = () => {
    if (typeof window !== 'undefined') {
      // 클라이언트 측에서만 실행되도록 확인
      axios.defaults.headers.common['Authorization'] = null;

      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');

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
