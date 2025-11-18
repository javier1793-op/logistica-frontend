import React, { useState } from 'react'
import TrackingSearch from './TrackingSearch'
import TrackingHeader from './TrackingHeader'
import CustomerInfo from './CustomerInfo'
import SellerInfo from './SellerInfo'
import OrderStatus from './OrderStatus'
import DeliveryFeedback from './DeliveryFeedback'
import TrackingTimeline from './TrackingTimeline'

export default function OrderTrackingDetails({ orderData, initialTrackingId }) {
  const [currentTrackingId, setCurrentTrackingId] = useState(initialTrackingId || null)

  // Datos de ejemplo - en producción vendrían de una API basada en currentTrackingId
  const defaultOrderData = {
    trackingNumber: currentTrackingId || '341918713810',
    courier: 'LOGISTICA',
    merchantLogo: 'TIENDA ARGENTINA',
    orderStatus: 'Entregado',
    deliveredDate: '27 Ago 2021, Viernes',
    lastUpdated: '29 Ago 2021, Domingo',
    customer: {
      name: 'Carlos Rodríguez',
      contact: '+54 11 4567-8901',
      address: [
        'Av. Corrientes 1234',
        'Piso 5, Oficina 12',
        'CABA - C1043AAX'
      ],
    },
    seller: {
      name: 'Comercio Argentino S.A.',
      phone: '+54 11 4***-****',
      email: 'soporte@comercioarg.com',
      showPhoneLink: true,
    },
    actions: {
      returnAllowed: true,
      exchangeAllowed: true,
      contactUrl: '/support/contact',
    },
    trackingHistory: [
      {
        datetime: '2021-08-27T14:30:00',
        status: 'Entregado',
        description: 'En ubicación Buenos Aires, CABA',
        highlight: true,
      },
      {
        datetime: '2021-08-27T11:30:00',
        status: 'En Camino',
        description: 'En ubicación Buenos Aires, CABA',
      },
      {
        datetime: '2021-08-25T17:30:00',
        status: 'En Tránsito',
        description: 'Desde Córdoba, CBA Hacia Buenos Aires, CABA',
      },
      {
        datetime: '2021-08-24T07:26:00',
        status: 'Pedido Recogido',
        description: 'Desde Córdoba, CBA',
      },
      {
        datetime: '2021-08-23T12:46:00',
        status: 'Pedido Recibido',
        description: 'En Córdoba, CBA',
      },
    ],
  }

  const data = orderData || defaultOrderData

  const handleSearch = (trackingId) => {
    setCurrentTrackingId(trackingId)
    // Aquí puedes hacer la llamada a la API para obtener los datos del tracking
    console.log('Buscando tracking:', trackingId)
    // En producción, aquí harías: fetchOrderTracking(trackingId)
  }

  const handleBackToSearch = () => {
    setCurrentTrackingId(null)
  }

  const handleReturn = () => {
    console.log('Return order clicked')
    // Aquí puedes agregar la lógica para devolver el pedido
  }

  const handleExchange = () => {
    console.log('Exchange item clicked')
    // Aquí puedes agregar la lógica para intercambiar el artículo
  }

  const handleContact = () => {
    console.log('Contact us clicked')
    // Aquí puedes agregar la lógica para contactar
  }

  const handleRatingChange = (rating) => {
    console.log('Rating selected:', rating)
    // Aquí puedes agregar la lógica para guardar el rating
  }

  // Si no hay tracking ID, mostrar la pantalla de búsqueda
  if (!currentTrackingId) {
    return <TrackingSearch onSearch={handleSearch} />
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white w-full max-w-6xl rounded-2xl shadow-xl p-8">
        {/* Botón para volver a buscar */}
        <div className="mb-4">
          <button
            onClick={handleBackToSearch}
            className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-2"
          >
            <span>←</span>
            <span>Buscar otro envío</span>
          </button>
        </div>

        {/* Header */}
        <TrackingHeader
          trackingNumber={data.trackingNumber}
          merchantLogo={data.merchantLogo}
          courierLogo={data.courier}
        />

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* LEFT COLUMN - Customer & Seller Information */}
          <div className="col-span-1 space-y-6 border-r pr-6">
            <CustomerInfo customer={data.customer} />
            <div className="pt-6 border-t">
              <SellerInfo seller={data.seller} />
            </div>
          </div>

          {/* RIGHT COLUMN - Main Tracking Area */}
          <div className="col-span-2 space-y-8">
            <OrderStatus
              status={data.orderStatus}
              deliveredDate={data.deliveredDate}
              lastUpdated={data.lastUpdated}
              onReturn={data.actions?.returnAllowed ? handleReturn : null}
              onExchange={data.actions?.exchangeAllowed ? handleExchange : null}
              onContact={handleContact}
            />

            <DeliveryFeedback onRatingChange={handleRatingChange} />

            <TrackingTimeline events={data.trackingHistory} />
          </div>
        </div>
      </div>
    </div>
  )
}

