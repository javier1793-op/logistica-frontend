import React from 'react'

export default function OrderStatus({ status, deliveredDate, lastUpdated, onReturn, onExchange, onContact }) {
  const statusColors = {
    Entregado: 'text-green-600',
    'En Tránsito': 'text-blue-600',
    'En Camino': 'text-orange-600',
    Pendiente: 'text-gray-600',
    Delivered: 'text-green-600', // Mantener compatibilidad
    'In Transit': 'text-blue-600',
    'Out for Delivery': 'text-orange-600',
    Pending: 'text-gray-600',
  }

  const statusColor = statusColors[status] || statusColors.Pending

  return (
    <div className="space-y-6">
      {/* Order Status */}
      <div>
        <p className="text-sm text-gray-500">tu pedido está</p>
        <h1 className={`text-4xl font-extrabold ${statusColor}`}>{status}</h1>
        {deliveredDate && (
          <p className="text-sm text-gray-600 mt-1">Entregado el {deliveredDate}</p>
        )}
        {lastUpdated && (
          <p className="text-sm text-gray-400">Última actualización el {lastUpdated}</p>
        )}
      </div>

      {/* Customer Actions */}
      <div className="space-y-3 text-right">
        {onReturn && (
          <button
            onClick={onReturn}
            className="text-sm border border-gray-300 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
          >
            <span>📦</span>
            <span>Devolver Pedido</span>
          </button>
        )}
        {onExchange && (
          <button
            onClick={onExchange}
            className="text-sm border border-gray-300 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors block w-full flex items-center justify-center gap-2"
          >
            <span>⇄</span>
            <span>Intercambiar Artículo</span>
          </button>
        )}
        {onContact && (
          <div className="mt-2">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                onContact()
              }}
              className="text-blue-600 text-sm hover:underline"
            >
              Contáctanos
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

