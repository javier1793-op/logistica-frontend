import React from 'react'

export default function TrackingTimeline({ events }) {
  if (!events || events.length === 0) return null

  // Función para formatear fecha ISO a formato legible
  const formatDateTime = (datetime) => {
    try {
      const date = new Date(datetime)
      
      // Obtener el día (sin sufijo en español)
      const day = date.getDate()

      // Meses abreviados en español
      const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
      const month = months[date.getMonth()]

      // Formatear hora en formato 24 horas (formato español)
      const hours = date.getHours()
      const minutes = date.getMinutes()
      const displayHours = hours.toString().padStart(2, '0')
      const displayMinutes = minutes.toString().padStart(2, '0')
      const time = `${displayHours}:${displayMinutes}`

      // Formatear fecha: "27 Ago 2021" (formato español)
      const formattedDate = `${day} ${month} ${date.getFullYear()}`

      return {
        date: formattedDate,
        time: time,
      }
    } catch (error) {
      console.error('Error formatting datetime:', error)
      return { date: '', time: '' }
    }
  }

  // Ordenar eventos: más reciente arriba (si no vienen ya ordenados)
  const sortedEvents = [...events].sort((a, b) => {
    const dateA = new Date(a.datetime)
    const dateB = new Date(b.datetime)
    return dateB - dateA // Orden descendente (más reciente primero)
  })

  return (
    <div className="space-y-6">
      <h3 className="font-semibold text-gray-700 text-lg">Historial de Seguimiento</h3>

      <div className="relative flex justify-center">
        {/* Línea vertical de la timeline centrada */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2"></div>

        {/* Contenedor scrollable */}
        <div className="max-h-96 overflow-y-auto space-y-8 pr-2 w-full">
          {sortedEvents.map((event, index) => {
            const { date, time } = formatDateTime(event.datetime)
            
            // Determinar si está destacado: usar highlight o status === "Entregado" o "Delivered"
            const isHighlighted = event.highlight || event.status === 'Entregado' || event.status === 'Delivered'
            
            // Colores y estilos según el estado
            const dotColor = isHighlighted ? 'bg-green-500' : 'bg-gray-400'
            const dotSize = isHighlighted ? 'w-4 h-4' : 'w-3 h-3'
            const statusColor = isHighlighted ? 'text-green-600 font-semibold' : 'text-gray-600'

            return (
              <div key={index} className="relative flex items-start">
                {/* Fecha y hora a la izquierda */}
                <div className="flex-1 pr-4 text-right pb-2">
                  <p className="text-sm font-medium text-gray-800">
                    {date}, A las {time}
                  </p>
                </div>

                {/* Nodo (punto) de la timeline centrado */}
                <div
                  className={`${dotSize} ${dotColor} rounded-full border-2 border-white shadow-sm flex-shrink-0 relative z-10 ${
                    isHighlighted ? 'ring-2 ring-green-200' : ''
                  }`}
                  style={{ marginTop: '2px' }}
                />

                {/* Estado y lugar a la derecha */}
                <div className="flex-1 pl-4 text-left pb-2">
                  {/* Estado del envío */}
                  <p className={`text-sm ${statusColor}`}>
                    {event.status}
                  </p>
                  
                  {/* Descripción/Ubicación debajo del estado */}
                  {event.description && (
                    <p className="text-gray-600 text-sm mt-1">
                      {event.description}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

