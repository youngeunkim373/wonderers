import { mswApiHost } from "@/mocks/apiHost";
import axios from "axios";

interface CustomApiResponse<T> {
  status: number,
  headers: object,
  data: T,
}

export async function API<T extends object, K extends object = {}>(method: string, path: string, body?: K) {
    let result: CustomApiResponse<T> | null = null;
    let error: any = null;
    try {
      const r = await axios({
        method,
        url: `${mswApiHost}${path.substring(0, 1) !== '/' ? '/' : ''}${path}`,
        headers: {'Content-Type': 'application/json'},
        ...(method.toLowerCase() === 'get' || body === null
          ? {}
          : { data: typeof body === 'string' ? body : JSON.stringify(body), }),
        validateStatus: () => true,
      });
      const headers = Object.keys(r.headers)
        .reduce((m, key) => ({ ...m, [key.toUpperCase()]: r.headers[key] }), {});
  
      result = {
        status: r.status,
        headers,
        data: r.data,
      };
      return result;
    } catch (e) {
      error = e;
      throw e;
    }
  }