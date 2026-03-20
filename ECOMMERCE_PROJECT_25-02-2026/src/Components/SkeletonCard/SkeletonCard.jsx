import React from 'react'

const SkeletonCard = () => {
  return (
    <div className="p-4 border rounded animate-pulse">

      <div className="h-5 bg-pink-300 mb-3"></div>
      <div className="h-4 bg-pink-300 mb-2"></div>
      <div className="h-4 bg-pink-300"></div>

    </div>
  )
}

export default SkeletonCard