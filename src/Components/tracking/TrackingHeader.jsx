import React from 'react'

export default function TrackingHeader({ trackingNumber, merchantLogo, courierLogo }) {
  return (
    <div className="flex justify-between items-start mb-6 pb-6 border-b">
      {/* Merchant Logo */}
      <div className="text-xl font-semibold tracking-wide">
        {merchantLogo || 'TIENDA ARGENTINA'}
      </div>

      {/* Courier Logo and Tracking Number */}
      <div className="text-right space-y-2">
        {courierLogo && (
          <div className="text-sm font-medium text-gray-600">{courierLogo}</div>
        )}
        <div>
          <p className="text-xs text-gray-500">Nº de Seguimiento</p>
          <p className="text-lg font-bold text-gray-800">#{trackingNumber}</p>
        </div>
      </div>
    </div>
  )
}

