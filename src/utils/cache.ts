import axios, { Canceler } from "axios";

export default {
  get: (url: string, ...params: any[]) =>{
    // const url = params[0]
    const storedData = localStorage.getItem(url)
    
    if (storedData) {
    return new Promise((resolve) => {
      resolve(JSON.parse(storedData));
      });
    } else {
      return (
          axios.get(url, ...params)
            .then(res => {
              localStorage.setItem(url, JSON.stringify(res))
              return res
            })
        )
    }
  },
  store: (key: string, val:object | string) => localStorage.setItem(key, JSON.stringify(val))
}