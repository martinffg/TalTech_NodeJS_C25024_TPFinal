// services
import { getAllProducts, saveProduct, getProduct, deleteProduct } from "../models/product.model.js";

const getAll = async () => {
  return await getAllProducts();
};
const createProduct = async (product) => {
  return await saveProduct(product);
};

const getOneProduct = async (productId) => {
  return await getProduct(productId);
};

// const getOneProduct = async (productId) => {
//   const products = await getAllProducts();
//   return await products.find((product) => product.id === productId);
// };

const deleteOneProduct = async (productId) => {
  console.log(typeof productId);
  await deleteProduct(productId);
};

export default { getAll, createProduct, getOneProduct, deleteOneProduct };
