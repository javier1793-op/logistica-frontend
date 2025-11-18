import React, { useState } from 'react'
import OrderTrackingDetails from '../tracking/OrderTrackingDetails'
import ManageOrders from '../orders/ManageOrders'

export default function Home() {
  const [currentView, setCurrentView] = useState(null)

  const BackButton = () => (
    <button
      onClick={() => setCurrentView(null)}
      className="fixed top-4 left-4 z-50 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-50 transition-colors flex items-center gap-2 text-gray-700"
    >
      <span>←</span>
      <span>Menú Inicial</span>
    </button>
  )

  if (currentView === 'tracking') {
    return (
      <>
        <BackButton />
        <OrderTrackingDetails />
      </>
    )
  }

  if (currentView === 'manage') {
    return (
      <>
        <BackButton />
        <ManageOrders />
      </>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Sistema de Logística</h1>
          <p className="text-gray-600">Selecciona una función para comenzar</p>
        </div>

        {/* Cards de selección */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card: Order Tracking */}
          <div
            onClick={() => setCurrentView('tracking')}
            className="bg-white rounded-xl shadow-lg p-8 cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-blue-500"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📦</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Seguimiento de Envío</h2>
              <p className="text-gray-600 mb-4">
                Consulta el estado y el historial de seguimiento de tus pedidos
              </p>
              <div className="flex flex-wrap gap-2 justify-center text-xs text-gray-500">
                <span className="px-3 py-1 bg-gray-100 rounded-full">Timeline</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full">Detalles</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full">Rating</span>
              </div>
            </div>
          </div>

          {/* Card: Manage Orders */}
          <div
            onClick={() => setCurrentView('manage')}
            className="bg-white rounded-xl shadow-lg p-8 cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-green-500"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📋</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Gestión de Órdenes</h2>
              <p className="text-gray-600 mb-4">
                Administra, filtra y gestiona todas tus órdenes desde un solo lugar
              </p>
              <div className="flex flex-wrap gap-2 justify-center text-xs text-gray-500">
                <span className="px-3 py-1 bg-gray-100 rounded-full">Filtros</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full">Categorías</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full">Tabla</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

