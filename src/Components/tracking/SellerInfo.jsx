import React from 'react'

export default function SellerInfo({ seller }) {
  if (!seller) return null

  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-gray-700 text-sm">Nombre del Vendedor</h3>
      <p className="text-gray-800">{seller.name}</p>

      <h3 className="font-semibold text-gray-700 text-sm">Soporte del Vendedor</h3>
      {seller.phone && (
        <p className="text-gray-800">
          {seller.phone}
          {seller.showPhoneLink && (
            <a href="#" className="text-blue-600 ml-2 text-xs">
              (Ver Número)
            </a>
          )}
        </p>
      )}
      {seller.email && (
        <p className="text-gray-800">{seller.email}</p>
      )}
    </div>
  )
}

