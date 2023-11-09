import Link from 'next/link'
import React from 'react'

export default function Layout({ children }) {
  return (
    <div className='flex overflow-hidden'>
      <div className='w-[200px] bg-blue-200 p-3'>
        <Link href={'/'}><p>Logo</p></Link>
        <Link href={'/crm'}><p>Crm</p></Link>
        <Link href={'/about'}><p>About</p></Link>
      </div>
      <div className='w-full h-screen overflow-auto'>
        <div className='p-3 sticky top-0 bg-white border-b-2'>Page Header</div>
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}
