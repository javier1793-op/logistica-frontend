import React from 'react'

export default function OrdersSidebar({ categories, activeCategory, onCategoryClick }) {
  const categoryGroups = [
    {
      title: 'Órdenes en Cola',
      items: [
        { id: 'orders_in_queue', label: 'Órdenes en Cola', count: categories.ordersInQueue || 0 },
        { id: 'new_orders', label: 'Órdenes Nuevas', count: categories.newOrders || 0 },
        { id: 'non_serviceable', label: 'No Serviciables', count: categories.nonServiceable || 0 },
        { id: 'invalid_error', label: 'Inválidas/Error', count: categories.invalidError || 0 },
        { id: 'on_hold_others', label: 'En Espera/Otros', count: categories.onHoldOthers || 0 },
      ],
    },
    {
      title: 'Cola de Despacho',
      items: [
        { id: 'ready_for_labelling', label: 'Listas para Etiquetar', count: categories.readyForLabelling || 0 },
        { id: 'ready_for_handover', label: 'Listas para Entrega', count: categories.readyForHandover || 0 },
      ],
    },
    {
      title: 'Órdenes Procesadas',
      items: [
        { id: 'pickup_pending', label: 'Recogida Pendiente', count: categories.pickupPending || 0 },
        { id: 'pickup_done', label: 'Recogida Realizada', count: categories.pickupDone || 0 },
      ],
    },
    {
      title: 'Órdenes Canceladas',
      items: [
        { id: 'canceled_orders', label: 'Órdenes Canceladas', count: categories.canceledOrders || 0 },
      ],
    },
  ]

  return (
    <div className="w-64 bg-white rounded-lg border border-gray-200 p-4 h-fit">
      {categoryGroups.map((group, groupIndex) => (
        <div key={groupIndex} className={groupIndex > 0 ? 'mt-6' : ''}>
          <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">{group.title}</h3>
          <div className="space-y-1">
            {group.items.map((item) => (
              <button
                key={item.id}
                onClick={() => onCategoryClick(item.id)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex justify-between items-center ${
                  activeCategory === item.id
                    ? 'bg-blue-50 text-blue-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span className="text-sm">{item.label}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    activeCategory === item.id
                      ? 'bg-blue-200 text-blue-800'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {String(item.count).padStart(2, '0')}
                </span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

