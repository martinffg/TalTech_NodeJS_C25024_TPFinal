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

// SE COMENTAN ESTAS LÍNEAS PROPUETAS EN LA DOC DE FIREBASE AL NO FUNCIONAR Y SE OPTA POR LA VERSION ANTERIOR DEL METODO
// export const getProduct = async (documentId) => {
//   try {
//     const docRef = doc(db, "productos", documentId);
//     const docSnap = await getDoc(docRef);

//     if (docSnap.exists()) {
//       console.log("Document data:", docSnap.data());
//       console.log("Document ID:", docSnap.id);
//       return docSnap.data();
//     } else {
//       console.log("No such document!");
//       return null;
//     }
//   } catch (error) {
//     console.error("Error getting document:", error);
//     throw error;
//   }
// }

// EN LA DOC DE FIREBASE FIGURA ASI EL METODO Y AUN ASÌ NO FUNCIONA.
export const deleteProduct = async (productId) => {
  try {
    const docRef = doc(db, "productos", productId);
    await deleteDoc(docRef);
    console.log("Document successfully deleted!");
  } catch (error) {
    throw new Error("Error removing document:", error.message);
  }
};
