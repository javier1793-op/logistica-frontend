import React, { useState } from 'react'

export default function TrackingSearch({ onSearch }) {
  const [trackingId, setTrackingId] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (trackingId.trim()) {
      onSearch(trackingId.trim())
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">📦</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Seguimiento de Envío</h1>
          <p className="text-gray-600">Ingresa el ID del producto o número de tracking para consultar su estado</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="trackingId" className="block text-sm font-medium text-gray-700 mb-2">
              ID del Producto / Número de Tracking
            </label>
            <input
              type="text"
              id="trackingId"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              placeholder="Ej: 341918713810 o MTEST-390"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              autoFocus
            />
          </div>

          <button
            type="submit"
            disabled={!trackingId.trim()}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Buscar Seguimiento
          </button>
        </form>
      </div>
    </div>
  )
}

