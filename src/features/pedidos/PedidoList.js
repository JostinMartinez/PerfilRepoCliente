import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPedidos } from './PedidoSlice';

const PedidoList = () => {
  const dispatch = useDispatch();
  const pedidos = useSelector((state) => state.pedidos.items);
  const status = useSelector((state) => state.pedidos.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPedidos());
    }
  }, [status, dispatch]);

  return (
    <div>
      <h2>Pedidos Realizados</h2>
      {status === 'loading' ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {pedidos.map((pedido) => (
            <li key={pedido.id}>
              {pedido.articulo} - {pedido.cantidad}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PedidoList;