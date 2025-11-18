import React from 'react'

export default function CustomerInfo({ customer }) {
  if (!customer) return null

  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-gray-700 text-sm">Nombre del Cliente</h3>
      <p className="text-gray-800">{customer.name}</p>

      <h3 className="font-semibold text-gray-700 text-sm">Contacto del Cliente</h3>
      <p className="text-gray-800">{customer.contact}</p>

      <h3 className="font-semibold text-gray-700 text-sm">Dirección de Entrega</h3>
      <p className="text-gray-800 whitespace-pre-line">
        {Array.isArray(customer.address) 
          ? customer.address.join('\n')
          : customer.address}
      </p>
    </div>
  )
}

