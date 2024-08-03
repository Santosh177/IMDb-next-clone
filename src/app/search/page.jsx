'use client'
import React from 'react'

export default function Search() {
  return (
    <div>
      <h1>Something went wrong. Please try again later.</h1>
      <button className='hover:text-amber-600' onClick={() => window.location.href='/'}>
        Try Again
      </button>
    </div>
  )
}
