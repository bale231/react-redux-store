import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Stato iniziale
const initialState = {
  products: [], // Sarà un array di oggetti prodotti
  status: "idle", // Stato del fetch
  error: null, // Per gestire eventuali errori
};

// `createAsyncThunk` per fetchare il singolo prodotto
export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await fetch(`https://fakestoreapi.com/products`);
    const data = await response.json();
    return data;
  }
);

// Creazione dello slice
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;

