import React, { useState, useMemo } from 'react'
import OrdersHeader from './OrdersHeader'
import OrdersFilters from './OrdersFilters'
import OrdersSidebar from './OrdersSidebar'
import OrdersTable from './OrdersTable'

export default function ManageOrders({ ordersData }) {
  // Datos de ejemplo
  const defaultOrders = [
    {
      orderId: 'MTEST-390',
      customerName: 'María González',
      customerPhone: '+54 11 4567-8901',
      itemsCount: 3,
      weight: 0.2,
      createdAt: new Date(Date.now() - 60 * 60 * 1000).toISOString(), // 1 hour ago
      shipping: {
        from: { city: 'Buenos Aires', state: 'CABA', postalCode: 'C1000' },
        to: { city: 'La Plata', state: 'BA', postalCode: 'B1900' },
      },
      payment: { amount: 100, type: 'PPD' },
      status: 'new',
      eddDays: 5,
    },
    {
      orderId: 'MTEST-391',
      customerName: 'Juan Pérez',
      customerPhone: '+54 351 2345-6789',
      itemsCount: 2,
      weight: 0.15,
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
      shipping: {
        from: { city: 'Córdoba', state: 'CBA', postalCode: 'X5000' },
        to: { city: 'Rosario', state: 'SF', postalCode: 'S2000' },
      },
      payment: { amount: 250, type: 'COD' },
      status: 'non_serviceable',
      eddDays: 3,
    },
    {
      orderId: 'MTEST-392',
      customerName: 'Ana Martínez',
      customerPhone: '+54 261 3456-7890',
      itemsCount: 1,
      weight: 0.1,
      createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(), // 3 hours ago
      shipping: {
        from: { city: 'Mendoza', state: 'MZA', postalCode: 'M5500' },
        to: { city: 'San Juan', state: 'SJ', postalCode: 'J5400' },
      },
      payment: { amount: 150, type: 'PPD' },
      status: 'error',
      eddDays: 7,
    },
  ]

  const orders = ordersData || defaultOrders

  // Estados de filtros
  const [filters, setFilters] = useState({
    assignedTo: 'all',
    serviceType: 'all',
    payType: 'all',
    date: 'last15',
    store: '',
    searchQuery: '',
  })

  // Estado de categoría activa
  const [activeCategory, setActiveCategory] = useState('orders_in_queue')

  // Estado de selección
  const [selectedOrders, setSelectedOrders] = useState([])

  // Contadores de categorías (simulado - en producción vendría de la API)
  const categoryCounts = useMemo(() => {
    return {
      ordersInQueue: orders.filter((o) => ['new', 'non_serviceable', 'error'].includes(o.status)).length,
      newOrders: orders.filter((o) => o.status === 'new').length,
      nonServiceable: orders.filter((o) => o.status === 'non_serviceable').length,
      invalidError: orders.filter((o) => o.status === 'error').length,
      onHoldOthers: 0,
      readyForLabelling: 6,
      readyForHandover: 0,
      pickupPending: 6,
      pickupDone: 6,
      canceledOrders: 2,
    }
  }, [orders])

  // Filtrado de órdenes
  const filteredOrders = useMemo(() => {
    let filtered = [...orders]

    // Filtro por categoría
    const categoryFilters = {
      orders_in_queue: (o) => ['new', 'non_serviceable', 'error'].includes(o.status),
      new_orders: (o) => o.status === 'new',
      non_serviceable: (o) => o.status === 'non_serviceable',
      invalid_error: (o) => o.status === 'error',
      on_hold_others: () => false,
      ready_for_labelling: () => false,
      ready_for_handover: () => false,
      pickup_pending: () => false,
      pickup_done: () => false,
      canceled_orders: (o) => o.status === 'canceled',
    }

    if (categoryFilters[activeCategory]) {
      filtered = filtered.filter(categoryFilters[activeCategory])
    }

    // Filtro por búsqueda
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase()
      filtered = filtered.filter(
        (o) =>
          o.orderId.toLowerCase().includes(query) ||
          o.customerPhone.replace(/-/g, '').includes(query.replace(/-/g, ''))
      )
    }

    // Filtro por tipo de pago
    if (filters.payType !== 'all') {
      filtered = filtered.filter((o) => o.payment.type.toLowerCase() === filters.payType.toLowerCase())
    }

    return filtered
  }, [orders, activeCategory, filters])

  // Handlers
  const handleSync = () => {
    console.log('Sync clicked')
    // Aquí iría la lógica de sincronización
  }

  const handleNewOrder = () => {
    console.log('New Order clicked')
    // Aquí iría la lógica para crear nueva orden
  }

  const handleSelectOrder = (orderId, checked) => {
    if (checked) {
      setSelectedOrders([...selectedOrders, orderId])
    } else {
      setSelectedOrders(selectedOrders.filter((id) => id !== orderId))
    }
  }

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedOrders(filteredOrders.map((o) => o.orderId))
    } else {
      setSelectedOrders([])
    }
  }

  const handleAction = (orderId, action) => {
    console.log(`Action ${action} for order ${orderId}`)
    // Aquí iría la lógica para cada acción
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <OrdersHeader onSync={handleSync} onNewOrder={handleNewOrder} />

        {/* Filters */}
        <OrdersFilters
          assignedTo={filters.assignedTo}
          serviceType={filters.serviceType}
          payType={filters.payType}
          date={filters.date}
          store={filters.store}
          searchQuery={filters.searchQuery}
          onAssignedToChange={(value) => setFilters({ ...filters, assignedTo: value })}
          onServiceTypeChange={(value) => setFilters({ ...filters, serviceType: value })}
          onPayTypeChange={(value) => setFilters({ ...filters, payType: value })}
          onDateChange={(value) => setFilters({ ...filters, date: value })}
          onStoreChange={(value) => setFilters({ ...filters, store: value })}
          onSearchChange={(value) => setFilters({ ...filters, searchQuery: value })}
        />

        {/* Main Content */}
        <div className="flex gap-6">
          {/* Sidebar */}
          <OrdersSidebar
            categories={categoryCounts}
            activeCategory={activeCategory}
            onCategoryClick={setActiveCategory}
          />

          {/* Table */}
          <div className="flex-1">
            <OrdersTable
              orders={filteredOrders}
              selectedOrders={selectedOrders}
              onSelectOrder={handleSelectOrder}
              onSelectAll={handleSelectAll}
              onAction={handleAction}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

