import { createContext, useContext, useState, PropsWithChildren, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

// @ts-ignore
const AuthContext = createContext<ReturnType<typeof useAuth>>(null);

function useAuth() {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const accessToken = sessionStorage.getItem('accessToken');
      if (accessToken) {
        setIsLoggedIn(true);
      }
    }
  }, []);

  const logIn = async (userData: any) => {
    try {
      const response = await axios.post('http://localhost:7737/api/login', { userData });

      if (response.status === 200) {
        const responseData = response.data;
        sessionStorage.setItem('accessToken', responseData.accessToken);
        sessionStorage.setItem('refreshToken', responseData.refreshToken);
        setIsLoggedIn(true);
        router.push('/');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data.message || '알 수 없는 오류가 발생했습니다.';
        console.error(errorMessage);
      }
    }
  };

  const extendSession = (data: any) => {
    const { accessToken, refreshToken } = data;

    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    sessionStorage.setItem('accessToken', accessToken);
    sessionStorage.setItem('refreshToken', refreshToken);

    setIsLoggedIn(true);

    setTimeout(silentRefresh, 58 * 1000); // 테스트용 58초
    // setTimeout(silentRefresh, (1800 - 30) * 1000); // 29.5분
  };

  const silentRefresh = async () => {
    try {
      if (typeof window !== 'undefined') {
        const storedRefreshToken = sessionStorage.getItem('refreshToken');

        const response = await axios.post('http://localhost:7737/api/refresh', {
          refreshToken: storedRefreshToken,
        });

        const responseData = response.data;
        console.log('newAccessToken: ', responseData.accessToken);

        extendSession(responseData);
      }
    } catch (error) {
      console.error('Silent refresh 실패:', error);

      if (axios.isAxiosError(error) && error.response?.status === 401) {
        logOut();
      }
    }
  };

  const logOut = () => {
    if (typeof window !== 'undefined') {
      // 클라이언트 측에서만 실행되도록 확인
      axios.defaults.headers.common['Authorization'] = null;

      sessionStorage.removeItem('accessToken');
      sessionStorage.removeItem('refreshToken');

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
