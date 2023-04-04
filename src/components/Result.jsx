import React from 'react'

export default function Result({properties}) {
  console.log(properties)
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4'>
      {properties && properties.length > 0 ? (
        properties.map((property) => (
          <div key={property.property_id}>
             <h1>{property.address.neighborhood_name}</h1>
            <p>baths: {property.baths}</p>
            <p>beds: {property.beds}</p>
            <p>{property.price}</p>
            <img src={property.thumbnail} alt={property.description} />
          </div>
        ))
      ) : (
        <p>Loading property details...</p>
      )}
    </div>
  )
}
