import { configureStore, createSlice } from "@reduxjs/toolkit";
import { ProductModel } from "../Models/ProductModel";
import { addProduct, deleteProduct, initProducts, updateProduct } from "./reducers";

// The application level entire state (all slices):
export type AppState = {
    products: ProductModel[];
    // employee: EmployeeModel[]; 
    // ...
};

// Product slice: 
const productSlice = createSlice({
    name: "products", // Internal use.
    initialState: [],
    reducers: { initProducts, addProduct, updateProduct, deleteProduct}
});

// Action creators: 
export const productActions = productSlice.actions;

// Create store:
export const store = configureStore<AppState>({
    reducer: {
        products: productSlice.reducer
    }
});
