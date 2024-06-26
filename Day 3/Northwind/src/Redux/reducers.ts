import { PayloadAction } from "@reduxjs/toolkit";
import { ProductModel } from "../Models/ProductModel";

// Init all products: 
export function initProducts(previousState: ProductModel[], action: PayloadAction<ProductModel[]>) {
    const newState: ProductModel[] = action.payload; // Here the payload will be the initial products.
    return newState;
}

// Add new product: 
export function addProduct(previousState: ProductModel[], action: PayloadAction<ProductModel>) {
    const newState: ProductModel[] = [...previousState];
    newState.push(action.payload); // Here the payload is the new product to add.
    return newState;
}

// Update existing product:
export function updateProduct(previousState: ProductModel[], action: PayloadAction<ProductModel>) {
    const newState: ProductModel[] = [...previousState];
    const index = newState.findIndex(p => p.id === action.payload.id); // Here the payload is the product to update.
    if(index >= 0) newState[index] = action.payload;
    return newState;
}

// Delete product: 
export function deleteProduct(previousState: ProductModel[], action: PayloadAction<number>) {
    const newState: ProductModel[] = [...previousState];
    const index = newState.findIndex(p => p.id === action.payload); // Here the payload is the id of the product to delete.
    if(index >= 0) newState.splice(index, 1);
    return newState;
}
