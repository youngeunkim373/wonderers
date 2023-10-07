import { mockedTestApi } from './apis/test';
import { mockedLoginApi } from './apis/login';

export const handlers = [...mockedTestApi, ...mockedLoginApi];
