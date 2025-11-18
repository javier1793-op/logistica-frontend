import React from 'react'

export default function OrderRow({ order, isSelected, onSelect, onAction }) {
  const getStatusBadge = (status) => {
    const badges = {
      new: { label: 'Nueva', color: 'bg-green-100 text-green-800', action: 'Aprobar' },
      non_serviceable: { label: 'No Serviciable', color: 'bg-yellow-100 text-yellow-800', action: 'Cancelar' },
      error: { label: 'Error', color: 'bg-red-100 text-red-800', action: 'Editar y Corregir' },
      approved: { label: 'Aprobada', color: 'bg-blue-100 text-blue-800', action: null },
    }

    const badge = badges[status] || badges.new
    return badge
  }

  const formatTimeAgo = (dateString) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return 'Hace un momento'
    if (diffInHours === 1) return 'Hace 01 Hora'
    return `Hace ${String(diffInHours).padStart(2, '0')} Horas`
  }

  const badge = getStatusBadge(order.status)

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      {/* Checkbox */}
      <td className="px-4 py-4">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={(e) => onSelect(e.target.checked)}
          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
      </td>

      {/* Order Details */}
      <td className="px-4 py-4">
        <div className="space-y-1">
          <p className="font-semibold text-gray-800">{order.orderId}</p>
          <p className="text-sm text-gray-700">{order.customerName}</p>
          <p className="text-sm text-gray-600">{order.customerPhone}</p>
          <div className="flex gap-4 text-xs text-gray-500 mt-2">
            <span>Items: {String(order.itemsCount).padStart(2, '0')}</span>
            <span>Peso: {order.weight} KG</span>
            <span>{formatTimeAgo(order.createdAt)}</span>
          </div>
        </div>
      </td>

      {/* Shipping Details */}
      <td className="px-4 py-4">
        <div className="space-y-2 text-sm">
          <div>
            <p className="text-gray-500 text-xs mb-0.5">Desde:</p>
            <p className="text-gray-800">
              {order.shipping.from.city}, {order.shipping.from.state} ({order.shipping.from.postalCode})
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-xs mb-0.5">Hacia:</p>
            <p className="text-gray-800">
              {order.shipping.to.city}, {order.shipping.to.state} ({order.shipping.to.postalCode})
            </p>
          </div>
        </div>
      </td>

      {/* Payment Details */}
      <td className="px-4 py-4">
        <div className="space-y-1">
          <p className="font-semibold text-gray-800">₹{order.payment.amount}</p>
          <p className="text-sm text-gray-600">{order.payment.type}</p>
        </div>
      </td>

      {/* Status & Actions */}
      <td className="px-4 py-4">
        <div className="space-y-2">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${badge.color}`}>
            {badge.label}
          </span>
          {badge.action && (
            <button
              onClick={() => onAction(order.orderId, badge.action.toLowerCase())}
              className="block text-xs text-blue-600 hover:text-blue-800 mt-1"
            >
              → {badge.action}
            </button>
          )}
          <p className="text-xs text-gray-500 mt-1">EDD: {order.eddDays} Días</p>
        </div>
      </td>
    </tr>
  )
}

