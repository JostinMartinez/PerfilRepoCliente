import React from 'react';
import PedidoList from './features/pedidos/PedidoList';
import PedidoForm from './features/pedidos/PedidoForm';

function App() {
  return (
    <div className="App">
      <h1>Gestión de Pedidos</h1>
      <PedidoForm />
      <PedidoList />
    </div>
  );
}

export default App;