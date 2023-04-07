import { collection, getDocs, query, where, doc, getDoc, addDoc, writeBatch } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { products } from "../products/Products";

const firebaseConfig = {
    apiKey: "AIzaSyCWhfGGP1zrch5BK5GoAjrpVrpXGIJuG-k",
    authDomain: "testdb-788af.firebaseapp.com",
    projectId: "testdb-788af",
    storageBucket: "testdb-788af.appspot.com",
    messagingSenderId: "1082076510206",
    appId: "1:1082076510206:web:cddec8bc5b59bbd52af2af",
    measurementId: "G-CPYJSCQ84H"
    };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getProductsFromDataBase() {
    const productsColectionRef = collection(db, "products");
    let snapshotProducts = await getDocs(productsColectionRef);
    const documents = snapshotProducts.docs;

    const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
    return dataProducts;
}

export async function getProductsByCategoryFromDataBase(categoryURL) {
    const productsColectionRef = collection(db, "products");

    const q = query(productsColectionRef, where("category", "==", categoryURL));

    let snapshotProducts = await getDocs(q);
    const documents = snapshotProducts.docs;
    const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
    return dataProducts;
}
export async function getNewProductsFromDataBase() {
    const productsColectionRef = collection(db, "products");

    const q = query(productsColectionRef, where("new", "==", true));

    let snapshotProducts = await getDocs(q);
    const documents = snapshotProducts.docs;
    const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
    return dataProducts;
}
export async function getOfferProductsFromDataBase() {
    const productsColectionRef = collection(db, "products");

    const q = query(productsColectionRef, where("offer", "==", true));

    let snapshotProducts = await getDocs(q);
    const documents = snapshotProducts.docs;
    const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
    return dataProducts;
}

export async function getSingleProductFromDataBase(idItem) {
    const productsColectionRef = collection(db, 'products')
    const docRef = doc(productsColectionRef, idItem)
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists() === false)
        throw new Error('no existe el documento')
    return { ...docSnapshot.data(), id: docSnapshot.id };

}

export async function createOrder(orderData) {
    const collectionRef = collection(db, "orders");
    const response = await addDoc(collectionRef, orderData);
    console.log("Orden creada correctamente", response.id);

    return response.id;
}

export async function exportDataWithBatch() {
    const batch = writeBatch(db);
    const collectionRef = collection(db, "products");

    for (let item of products) {
        const newDoc = doc(collectionRef);
        batch.set(newDoc, item);
    }

    const resp = await batch.commit();
    console.log(resp);
}  