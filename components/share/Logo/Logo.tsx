import Link from 'next/link'
import React from 'react'

export const Logo = () => {
  return (
    <Link href='/'>
      <h1 className='text-xl font-bold'>KeyKeeper</h1>
    </Link>
  )
}
