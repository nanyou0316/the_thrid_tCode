const ins = axios.create({
  // baseURL: "http://localhost:3000",
  timeout: 4000,
});

ins.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

ins.interceptors.response.use(
  function (res) {
    return res;
  },
  function (error) {
    return Promise.reject(error);
  }
);

function request(options) {
  const {
    url,
    method = "GET",
    headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data,
  } = options;

  switch (method.toUpperCase()) {
    case "GET":
      return ins.get(url, { params: data });
      break;
    case "POST":
      switch (headers["Content-Type"]) {
        case "application/json":
          return ins.post(url, data, { headers });
          break;
        case "multipart/form-data":
          const p = new FormData();
          for (let key in data) {
            p.append(key, data[key]);
          }
          return ins.post(url, p, { headers });
          break;
        default:
          const params = new URLSearchParams();
          for (let key in data) {
            params.append(key, data[key]);
          }
          return ins.post(url, params, { headers });
          break;
      }
      break;
    case "PUT":
      return ins.put(url, {params: data});
      break;
    case "DELETE":
      console.log('delete',data)
      return ins.delete(url, {params: data});
      break;
    default:
      return ins.get(url,{params: data })
      break;
  }
}
