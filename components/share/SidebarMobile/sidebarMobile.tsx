'use client'

import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SidebarItems } from '../Sidebar/items'

export const SidebarMobile = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='ghost'>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side='left'>
        <SheetHeader className='text-left mb-5'>
          <SheetTitle>Key Keeper</SheetTitle>
          <SheetDescription className='text-slate-500'>
            Create and manage all of your password
          </SheetDescription>
        </SheetHeader>
        <SidebarItems />
      </SheetContent>
    </Sheet>
  )
}
