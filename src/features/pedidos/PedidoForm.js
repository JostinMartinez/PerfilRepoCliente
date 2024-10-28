import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPedido } from './PedidoSlice';

const PedidoForm = () => {
  const [articulo, setArticulo] = useState('');
  const [cantidad, setCantidad] = useState(1);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPedido({ articulo, cantidad }));
    setArticulo('');
    setCantidad(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Artículo:</label>
        <input
          type="text"
          value={articulo}
          onChange={(e) => setArticulo(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Cantidad:</label>
        <input
          type="number"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          min="1"
          required
        />
      </div>
      <button type="submit">Agregar Pedido</button>
    </form>
  );
};

export default PedidoForm;