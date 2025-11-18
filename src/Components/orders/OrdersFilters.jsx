import React from 'react'

export default function OrdersFilters({
  assignedTo,
  serviceType,
  payType,
  date,
  store,
  searchQuery,
  onAssignedToChange,
  onServiceTypeChange,
  onPayTypeChange,
  onDateChange,
  onStoreChange,
  onSearchChange,
}) {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        {/* Assigned to */}
        <div>
          <label className="block text-xs text-gray-600 mb-1">Asignado a</label>
          <select
            value={assignedTo}
            onChange={(e) => onAssignedToChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Todos</option>
            <option value="user1">Usuario 1</option>
            <option value="user2">Usuario 2</option>
          </select>
        </div>

        {/* Service type */}
        <div>
          <label className="block text-xs text-gray-600 mb-1">Tipo de servicio</label>
          <select
            value={serviceType}
            onChange={(e) => onServiceTypeChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Todos</option>
            <option value="express">Express</option>
            <option value="standard">Estándar</option>
          </select>
        </div>

        {/* Pay type */}
        <div>
          <label className="block text-xs text-gray-600 mb-1">Tipo de pago</label>
          <select
            value={payType}
            onChange={(e) => onPayTypeChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Todos</option>
            <option value="ppd">PPD</option>
            <option value="cod">COD</option>
          </select>
        </div>

        {/* Date */}
        <div>
          <label className="block text-xs text-gray-600 mb-1">Fecha</label>
          <select
            value={date}
            onChange={(e) => onDateChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="last15">Últimos 15 días</option>
            <option value="last7">Últimos 7 días</option>
            <option value="last30">Últimos 30 días</option>
          </select>
        </div>

        {/* Store */}
        <div>
          <label className="block text-xs text-gray-600 mb-1">Tienda</label>
          <select
            value={store}
            onChange={(e) => onStoreChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Seleccionar</option>
            <option value="store1">Tienda 1</option>
            <option value="store2">Tienda 2</option>
          </select>
        </div>

        {/* Search */}
        <div>
          <label className="block text-xs text-gray-600 mb-1">Buscar</label>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar por Nº de Orden o Nº de Móvil"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  )
}

