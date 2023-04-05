import React from 'react'
import Card from './Card'
import CArd from './Card'

export default function Result({properties}) {
  console.log(properties)
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4'>
      {properties && properties.length > 0 ? (
        properties.map((property) => (
          <div className="" key={property.property_id}>
              <Card property={property}/>
          </div>
          
        ))
      ) : (
        <p>Loading property details...</p>
      )}
    </div>
  )
}
