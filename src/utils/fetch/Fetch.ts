const METHODS = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
} as const;

type DataType = {
  [key: string]: any;
};

type OptionsType = {
  timeout?: number;
  method?: string;
  data?: DataType;
  headers?: DataType;
};

function queryStringify(data: DataType) {
  if (Object.keys(data).length === 0) return '';
  return `?${Object.keys(data)
    .map((key) => `${key}=${data[key]}`)
    .join('&')}`;
}

class HTTPTransport {
  get = (url: string, options: OptionsType = {}) => this.request(url, { ...options, method: METHODS.GET }, options.timeout);

  post = (url: string, options: OptionsType = {}) => this.request(url, { ...options, method: METHODS.POST }, options.timeout);

  put = (url: string, options: OptionsType = {}) => this.request(url, { ...options, method: METHODS.PUT }, options.timeout);

  delete = (url: string, options: OptionsType = {}) => this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);

  request = (url: string, options: OptionsType = {}, timeout = 5000) => {
    const { method, data, headers } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const newUrl = method === METHODS.GET ? url + queryStringify(data!) : url;
      xhr.open(method!, newUrl);
      if (headers) {
        Object.entries(headers).forEach(([key, value]) => {
          xhr.setRequestHeader(key, value);
        });
      }

      xhr.onload = () => {
        resolve(xhr);
      };

      xhr.timeout = timeout;
      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data as XMLHttpRequestBodyInit);
      }
    });
  };
}

export const FetchApi = new HTTPTransport();
