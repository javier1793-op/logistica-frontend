import React, { useState } from 'react'

export default function DeliveryFeedback({ onRatingChange }) {
  const [selectedRating, setSelectedRating] = useState(null)

  const ratings = [
    { emoji: '😞', label: 'Malo', value: 1 },
    { emoji: '😐', label: 'Regular', value: 2 },
    { emoji: '🙂', label: 'Bueno', value: 3 },
    { emoji: '😊', label: 'Muy Bueno', value: 4 },
    { emoji: '😄', label: 'Excelente', value: 5 },
  ]

  const handleRatingClick = (value) => {
    setSelectedRating(value)
    if (onRatingChange) {
      onRatingChange(value)
    }
  }

  return (
    <div>
      <p className="text-sm text-gray-600 mb-3">¿Cómo fue tu experiencia de entrega?</p>
      <div className="flex items-center gap-4">
        {ratings.map((rating) => (
          <button
            key={rating.value}
            onClick={() => handleRatingClick(rating.value)}
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all ${
              selectedRating === rating.value
                ? 'bg-blue-50 scale-110'
                : 'hover:bg-gray-50'
            }`}
            title={rating.label}
          >
            <span className="text-2xl">{rating.emoji}</span>
            <span className="text-xs text-gray-500">{rating.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

