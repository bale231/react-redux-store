import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Stato iniziale
const initialState = {
  product: null, // Sarà un singolo oggetto prodotto
  status: "idle", // Stato del fetch
  error: null, // Per gestire eventuali errori
};

// `createAsyncThunk` per fetchare il singolo prodotto
export const fetchProductById = createAsyncThunk(
  "product/fetchProductById",
  async (productId) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`
    );
    const data = await response.json();
    return data;
  }
);

// Creazione dello slice
export const singleProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    resetProductStatus: (state) => {
      state.status = "idle";
      state.product = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.product = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { resetProductStatus } = singleProductSlice.actions;
export default singleProductSlice.reducer;
