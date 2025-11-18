import React from 'react'

export default function OrdersHeader({ onSync, onNewOrder }) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-gray-800">Gestionar Órdenes</h1>
      <div className="flex gap-3">
        <button
          onClick={onSync}
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
        >
          <span>🔄</span>
          <span>Sincronizar</span>
        </button>
        <button
          onClick={onNewOrder}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <span>+</span>
          <span>Nueva Orden</span>
        </button>
      </div>
    </div>
  )
}

