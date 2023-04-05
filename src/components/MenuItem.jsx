import Link from 'next/link'
import React from 'react'

export default function MenuItem({title, address, Icon}) {
  return (
    <div>
      <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600 hover:bg-red-200 p-1">
        <Icon className="text-2xl sm:hidden mx-4"/>
      <p className='hidden sm:inline my-2 text-sm'>{title}</p>
      </Link>
    </div>
  )
}