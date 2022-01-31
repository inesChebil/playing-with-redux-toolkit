import { createSlice } from "@reduxjs/toolkit";

const initialProductsState = {
  products: [
    {
      id: "p1",
      title: "Test",
      price: 6,
      quantity: 1,
      description: "This is a first product - amazing!",
    },
    {
      id: "p2",
      title: "Test2",
      price: 8,
      quantity: 1,
      description: "This is a second product - amazing!",
    },
  ],
  choosedItems: [],
};
const productsSlice = createSlice({
  name: "products",
  initialState: initialProductsState,
  reducers: {
    increaseQt: (state, action) => {
      state.choosedItems.find((item) => item.id === action.payload.id)
        .quantity++;
    },
    decreaseQt: (state, action) => {
      const choosedProduct = state.choosedItems.find(
        (item) => item.id === action.payload.id
      );
      if (choosedProduct.quantity === 1) {
        state.choosedItems.splice(action.payload.id, 1);
        return;
      }
      choosedProduct.quantity--;
    },
    addToCart: (state, action) => {
      // console.log(action.payload.id);

      const foundInChooseItems = state.choosedItems.find(
        (el) => el.id === action.payload.id
      );
      if (foundInChooseItems !== undefined) {
        foundInChooseItems.quantity++;
      } else {
        const productchoosed = state.products.find(
          (p) => p.id === action.payload.id
        );
        state.choosedItems.push(productchoosed);
      }
    },
  },
});

export const productsActions = productsSlice.actions;
export default productsSlice.reducer;
