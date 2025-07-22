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
    //console.log("productId_model:",productId);
    //const docRef = doc(db, "productos", productId);
    //const docSnap = await getDoc(docRef);
    //const docSnap = await db.collection("productos").doc(productId).get();
    //const docSnap = await getDoc(productCollection,productId);
    //console.log("docSnap:");// ,productCollection.doc(productId).get());
    //   if (docSnap.exists()) {
    //   console.log("Document data:", docSnap.data());
    //   // productRes = docSnap.data();
    //   productRes = { id: docSnap.id, ...docSnap.data() };
    //   console.log("productRes:",productRes);
    //   } else {
    //   // doc.data() y productRes will be undefined in this case
    //   console.log("No such document!");
    //  }  
    // DEJO LAS LINEAS COMENTADAS PORQUE NO PUDE HACER ANDAR EL GETDOC DE NINGUNA FORMA.
    const productRes = [];
    productRes = await getAllProducts();
    console.log(productRes);
    return await productRes.find((producto) => producto.id === productId);
  } catch (error) {
    throw new Error("Error", error.message);
  }
};

export const deleteProduct = async (productId) => {
  try {
    console.log("productId_model:",id);
    const docRef = doc(db, "productos", productId);
    await deleteDoc(docRef);
    console.log("Document successfully deleted!");
  } catch (error) {
    throw new Error("Error removing document:", error.message);
  }
};
