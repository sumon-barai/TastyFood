const baseUrl = "http://localhost:5000";

const endpoints = {
  foods: baseUrl + "/foods",
  carts: baseUrl + "/carts",
};

Object.freeze(endpoints);

export default endpoints;
