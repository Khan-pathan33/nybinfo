import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Provider, useDispatch, useSelector } from "react-redux";
import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/* ================= ASYNC PRODUCTS ================= */
const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    return await response.json();
  }
);

/* ================= PRODUCT SLICE ================= */
const productSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchProducts.rejected, state => {
        state.loading = false;
        state.error = "Failed to load products";
      });
  },
});

/* ================= CART SLICE ================= */
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existing = state.items.find(i => i.id === product.id);

      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ ...product, qty: 1 });
      }

      state.total += product.price;
    },
  },
});

const { addToCart } = cartSlice.actions;

/* ================= STORE ================= */
const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlice.reducer,
  },
});

/* ================= APP ================= */
function App() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector(state => state.products);
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (error) return <p>{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Redux eCommerce</h1>

      <p className="mb-4">🛒 Cart Items: {cart.items.length}</p>

      {loading && <p>Loading...</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {list.map(product => (
          <div
            key={product.id}
            className="border p-4 rounded shadow"
          >
            <h2 className="text-sm font-semibold">
              {product.title}
            </h2>
            <p className="font-bold mt-2">${product.price}</p>

            <button
              className="mt-3 bg-black text-white px-4 py-2"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <h2 className="mt-6
