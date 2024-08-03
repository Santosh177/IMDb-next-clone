import React from 'react'
import Link from 'next/link'

export default function MenuItems({title , address, Icon}) {
  return (
    <Link className="hover:text-amber-500" href={address}>
      <Icon className=" text-2xl sm:hidden"/>
      <p className='uppercase hidden sm:inline'>{title}</p>
    </Link>
  )
}
