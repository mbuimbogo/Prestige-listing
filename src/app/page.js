"use client"
import Result from '@/components/Result';
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
    <div className='pb-34'>
      <Result properties={properties}/>
      
    </div>
  );
}
