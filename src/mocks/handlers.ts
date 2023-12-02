import { mockedTestApi } from './apis/test';
import { mockedLoginApi } from './apis/login';
import { mockedRefreshApi } from './apis/refresh';

export const handlers = [...mockedTestApi, ...mockedLoginApi, ...mockedRefreshApi];
