import React, { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase.utils"
import PRODUCTS from '../shop-data.json'


export const ProductsContext = createContext({
    products: []
});

export const ProductsProvider = ({ children }) => {
    const[products, setProducts] = useState(PRODUCTS);
    const value = {products, setProducts};

    // useEffect(() => {
    // const unsubscribe =  onAuthStateChangedListener((product) => {
    //     setProducts(product);
    // });
    // return unsubscribe;
    // }, []);
    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}
