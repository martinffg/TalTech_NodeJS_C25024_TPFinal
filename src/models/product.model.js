// model
import { db } from "../config/db.js";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const productCollection = collection(db, "productos");


export const getAllProducts = async () => {
  try {
    const productList = await getDocs(productCollection);
    const products = [];
    productList.forEach((doc) => products.push({ id: doc.id, ...doc.data() }));

    return products;
  } catch (error) {
    throw new Error("Error", error.message);
  }
};

export const getProduct = async (productId) => {
  try {
    const productRes = await getAllProducts();
    return productRes.find((producto) => producto.id === productId);
  } catch (error) {
    throw new Error("Error", error.message);
  }
};

export const saveProduct = async (product) => {
  try {
    const newProduct = await addDoc(productCollection, product);
    return newProduct
  } catch (error) {
    throw new Error("Error", error.message);
  }
};

export const deleteProduct = async (id) => {
  try {
    const productRef = doc(db, "productos", id);
    const productSnapshot = await getDoc(productRef);
    let encontrado;
    if (!productSnapshot.exists()) {
      encontrado= false;
    } else {
      await deleteDoc(productRef);
      console.log("El producto fue borrado correctamente."); 
      encontrado= true;
    }
    return encontrado;
  } catch (error) {
    throw new Error(`Error al intentar borrar producto: ${id}.  Detalle: `, error.message);
  }
};
