import { API } from "@/utils/api";
import { TestParams } from "./test.interface";

export const getTestApi = async () => await API<TestParams[]>('get', 'test');

export const postTestApi = async (param: TestParams) => await API<TestParams[], TestParams>('post', 'test', param);

