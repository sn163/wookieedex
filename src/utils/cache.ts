import axios, { AxiosResponse, CancelToken} from "axios";
import { PageData, People } from './types';


type AxiosOptions = {
  cancelToken: CancelToken
}

type Cache = {
  get: (url: string, options?: AxiosOptions) => PageData<People> | Promise<AxiosResponse>;
  set: (key: string, val: string) => void;
  clear: () => void;
  delete: (key: string) => void;
}

export const cache: Cache = {
  get: (url, options) => {
    const storedData = localStorage.getItem(url)
    
    if (storedData) {
    return JSON.parse(storedData);
    } else {
      return (
        axios.get(url, options)
          .then(res => {
            localStorage.setItem(url, JSON.stringify(res))
            return res
          })
      )
    }
  },
  set: (key, val) => localStorage.setItem(key, JSON.stringify(val)),
  clear: localStorage.clear,
  delete: localStorage.removeItem,
}