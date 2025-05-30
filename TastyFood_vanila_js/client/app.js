import { getProduct } from "./apiService/product/product.js";

const res = await getProduct("http://localhost:3000/foods");

console.log(res);
