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

export const saveProduct = async (product) => {
  try {
    const newProduct = await addDoc(productCollection, product);
    return newProduct
  } catch (error) {
    throw new Error("Error", error.message);
  }
};

export const getProduct = async (productId) => {
  try {
    const productRes = await getAllProducts();
    return await productRes.find((producto) => producto.id === productId);

  } catch (error) {
    throw new Error("Error", error.message);
  }
};

// EN LA DOC DE FIREBASE FIGURA ASI EL METODO Y AUN ASÌ NO FUNCIONA.
// export const deleteProduct = async (productId) => {
//   try {
//     const docRef = doc(db, "productos", productId);
//     console.log(docRef);
//     await deleteDoc(docRef);
//     console.log("Document successfully deleted!");
//   } catch (error) {
//     throw new Error("Error removing document:", error.message);
//   }
// };

export const deleteProduct = async (id) => {
  try {
    const productRef = doc(productCollection, id);
    const snapshot = await getDoc(productRef);

    if (!snapshot.exists()) {
      return false;
    }
    await deleteDoc(productRef);
    console.log("Document successfully deleted!");
    return true;
  } catch (error) {
    throw new Error("Error removing document:", error.message);
  }
};
