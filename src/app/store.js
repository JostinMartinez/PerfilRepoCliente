import { configureStore } from '@reduxjs/toolkit';
import pedidoReducer from '../features/pedidos/PedidoSlice';

export const store = configureStore({
  reducer: {
    pedidos: pedidoReducer,
  },
});