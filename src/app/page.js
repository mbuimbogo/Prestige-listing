"use client"
import { useState, useEffect } from 'react';

export default function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '45dce4d637mshaedcc5f388b0937p16d6e6jsna63d0f1141e1',
        'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com',
      },
    };

    try {
      fetch('https://realty-in-us.p.rapidapi.com/properties/v2/list-for-sale?city=New%20York%20City&state_code=NY&offset=0&limit=200&sort=relevance', options)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => setProperties(data.properties))
        .catch((error) => console.error('Error:', error));
    } catch (error) {
      console.error('Error:', error);
    }
  }, []);

  return (
    <div>
      {properties && properties.length > 0 ? (
        properties.map((property) => (
          <div key={property.property_id}>
             <h1>{property.address.neighborhood_name}</h1>
            <p>baths: {property.baths}</p>
            <p>beds: {property.beds}</p>
            <p>{property.price}</p>
            <img src={property.thumbnail} alt={property.description} />
            {/* Add more property details as needed */}
          </div>
        ))
      ) : (
        <p>Loading property details...</p>
      )}
      
    </div>
  );
}
