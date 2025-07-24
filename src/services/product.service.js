// services
import { getAllProducts, saveProduct, getProduct, deleteProduct } from "../models/product.model.js";

const getAll = async () => {
  return await getAllProducts();
};

const getOneProduct = async (productId) => {
  return await getProduct(productId);
};

const createProduct = async (product) => {
  return await saveProduct(product);
};

const deleteOneProduct = async (productId) => {
  return await deleteProduct(productId);
};

export default {getAll,getOneProduct,createProduct,deleteOneProduct};
