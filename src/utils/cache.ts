import axios, { AxiosResponse, CancelToken} from "axios";
import { PageData, People } from './types';


type Options = {
  cancelToken: CancelToken
}

export const cache = {
  get: (url: string, options?: Options): PageData<People> | Promise<AxiosResponse> => {
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
  store: (key: string, val:object | string) => localStorage.setItem(key, JSON.stringify(val))
}