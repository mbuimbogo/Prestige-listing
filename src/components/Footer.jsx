import React from 'react'

export default function Footer() {
  return (
    <div className='flex justify-center items-center text-lg p-4 font-bold'>
      <p>Prestige homes@{new Date().getFullYear()}</p>
    </div>
  )
}
