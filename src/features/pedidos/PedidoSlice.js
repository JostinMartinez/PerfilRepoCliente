import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// URL base de la API
const API_URL = 'https://localhost:7037/api/pedidos';

// Thunk para obtener todos los pedidos
export const fetchPedidos = createAsyncThunk('pedidos/fetchPedidos', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

// Thunk para crear un nuevo pedido
export const createPedido = createAsyncThunk('pedidos/createPedido', async (pedido) => {
  const response = await axios.post(API_URL, pedido);
  console.log(response.data);
  return response.data;
});

const pedidoSlice = createSlice({
  name: 'pedidos',
  initialState: {
    items: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPedidos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPedidos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(createPedido.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export default pedidoSlice.reducer;