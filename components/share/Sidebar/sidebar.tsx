import React from 'react'
import { Logo } from '../Logo'
import { SidebarItems } from './items'
import { ModeToggle } from '../Theme'

export const Sidebar = () => {
  return (
    <div>
      <div className='py-6'>
        <Logo />
      </div>
      <SidebarItems />
      <ModeToggle />
    </div>
  )
}
