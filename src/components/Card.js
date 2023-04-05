import Image from "next/image";
import React from "react";


export default function Card({ property }) {
  return (
    <div className="cursor-pointer border p-2 sm:p-3 sm:hover:shadow-slate-400 rounded-lg sm:shadow-md sm:border sm:border-slate-400 m-2 transition-shadow duration-200 group">
      <Image
        src={property.thumbnail}
        alt={property.description}
        width={500}
        height={300}
        className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200 h-[300px]"
        placeholder="blur"
        blurDataURL="/spinner.svg"
      />
      <div className="mt-2 p-2">
        <div className="flex items-center justify-center">
          <h1 className="flex flex-1 text-lg font-bold truncate">
            {property.address.neighborhood_name}
          </h1>
          <p className="text-sm">${property.price}</p>
        </div>
        <div className="flex space-x-2 text-sm">
          <span className="flex">
            Baths:<p className="ml-1">{property.baths}</p>
          </span>
          <p>Beds: {property.beds}</p>
        </div>
      </div>
    </div>
  );
}
