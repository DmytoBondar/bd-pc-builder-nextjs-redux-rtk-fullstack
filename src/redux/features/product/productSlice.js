import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    product: []
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.product.push(action.payload);
        }
    }
});

export default productSlice.reducer;
export const { addProduct } = productSlice.actions;