import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../fire";
import { useLocation, useNavigate } from "react-router-dom";
const productContext = createContext();
export const useProducts = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  productDetails: [],
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_PRODUCT_DETAILS":
      return { ...state, productDetails: action.payload };
    default:
      return { state };
  }
}

const ServiceContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //? Функция для получения ссылку на коллекцию данных fire db для дальнейшей работы
  const productsCollectionRef = collection(db, "services");

  //? READ START

  async function getProducts() {
    const data = await getDocs(productsCollectionRef);

    dispatch({
      type: "GET_PRODUCTS",
      payload: data.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
    });
  }

  //? CREATE START

  async function createProduct(newProduct) {
    await addDoc(productsCollectionRef, newProduct);
  }
  //? CREATE END

  //? EDIT START

  async function getOneProductDetails(id) {
    const productDocRef = doc(db, "services", id);
    const productDetails = await getDoc(productDocRef);

    dispatch({
      type: "GET_PRODUCT_DETAILS",
      payload: productDetails.data(),
    });
  }
  async function updateProduct(id, updatedProduct) {
    const productDocRef = doc(db, "services", id);

    await updateDoc(productDocRef, updatedProduct);
    getProducts();
  }
  //? EDIT END

  //? DELETE START
  async function deleteProduct(id) {
    const productDocRef = doc(db, "services", id);
    await deleteDoc(productDocRef);
    getProducts();
  }
  //? DELETE END
  //!FILTER

  const navigate = useNavigate();
  const location = useLocation();

  async function filters(sort) {
    const q = query(productsCollectionRef, where("category", "==", sort));
    const querySnapshot = await getDocs(q);
    const sorted = [];
    querySnapshot.forEach((doc) => {
      sorted.push(doc.data());
    });
    dispatch({
      type: "GET_PRODUCTS",
      payload: sorted,
    });
  }

  function searchData(input) {
    let search = state.products.filter((item) => {
      if (item.name.toLowerCase().includes(input.toLowerCase()) == true) {
        return true;
      } else {
        return false;
      }
    });
    dispatch({
      type: "GET_PRODUCTS",
      payload: search,
    });
  }

  useEffect(() => {
    getProducts();
  }, []);
  const values = {
    createProduct,
    searchData,
    getProducts,
    products: state.products,
    getOneProductDetails,
    productDetails: state.productDetails,
    updateProduct,
    deleteProduct,
    filters,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ServiceContextProvider;
