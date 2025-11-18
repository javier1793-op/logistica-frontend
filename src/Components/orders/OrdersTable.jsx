import React, { useRef, useEffect } from 'react'
import OrderRow from './OrderRow'

export default function OrdersTable({ orders, selectedOrders, onSelectOrder, onSelectAll, onAction }) {
  const allSelected = orders.length > 0 && selectedOrders.length === orders.length
  const someSelected = selectedOrders.length > 0 && selectedOrders.length < orders.length
  const selectAllRef = useRef(null)

  useEffect(() => {
    if (selectAllRef.current) {
      selectAllRef.current.indeterminate = someSelected
    }
  }, [someSelected])

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-left">
                <input
                  ref={selectAllRef}
                  type="checkbox"
                  checked={allSelected}
                  onChange={(e) => onSelectAll(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Detalles de la Orden</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Detalles de Envío</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Detalles de Pago</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Estado y Acciones</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-4 py-8 text-center text-gray-500">
                  No se encontraron órdenes
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <OrderRow
                  key={order.orderId}
                  order={order}
                  isSelected={selectedOrders.includes(order.orderId)}
                  onSelect={(checked) => onSelectOrder(order.orderId, checked)}
                  onAction={onAction}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

