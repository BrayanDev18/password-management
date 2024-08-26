import React from 'react'

export default function ProfileLayout({
  children,
  friendRequest
}: Readonly<{
  children: React.ReactNode
  friendRequest: React.ReactNode
}>) {
  return (
    <div>
      <div className='flex justify-around bg-yellow-200 p-5'>
        <h1>filters</h1>
        <h1>reques</h1>
      </div>
      {children}
      {friendRequest}
    </div>
  )
}
