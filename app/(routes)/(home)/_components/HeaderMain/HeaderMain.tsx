'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { dataHeaderMain } from '@/constants/headerMain.data'
import { HeaderProps } from '@/types/HeaderMain'
import { ChevronDown, TentTree } from 'lucide-react'
import { useState } from 'react'
import { FormAddElement } from '../FormAddElement'

export const HeaderMain = ({ userId }: HeaderProps) => {
  const [typeElement, steTypeElement] = useState<'password' | 'file' | ''>()
  const [openDialog, setOpenDialog] = useState(false)
  const [openDrop, setOpenDrop] = useState(false)

  const closeDialogAndDrop = () => {
    setOpenDialog(false)
    setOpenDrop(false)
  }

  return (
    <div className='flex justify-between items-center px-5'>
      <h1 className='text-xl md:text-2xl font-semibold'>All safes</h1>

      <Dialog
        open={openDialog}
        onOpenChange={setOpenDialog}
      >
        <DropdownMenu
          open={openDrop}
          onOpenChange={setOpenDrop}
        >
          <DropdownMenuTrigger asChild>
            <Button
              variant='ghost'
              className='bg-secondary-purple hover:bg-primary-purple'
            >
              New <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='p-0'>
            <DropdownMenuLabel>
              <DialogTrigger asChild>
                <div className='flex flex-col'>
                  {dataHeaderMain.map(({ typeElement, icon: Icon, text }) => (
                    <Button
                      key={typeElement}
                      variant='ghost'
                      className='justify-start'
                      onClick={() => steTypeElement(typeElement)}
                    >
                      <Icon className='w-4 h-4 mr-2' />
                      {text}
                    </Button>
                  ))}
                </div>
              </DialogTrigger>
            </DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>

        <DialogContent className='sm:max-w-[825px]'>
          <Button
            variant='outline'
            className='w-[55px]'
          >
            <TentTree
              size={25}
              color='#9333ea'
            />
          </Button>
          <DialogHeader>
            <DialogTitle>Create New Element</DialogTitle>
          </DialogHeader>
          {typeElement === 'password' ? (
            <FormAddElement
              userId={userId}
              closeDialogAndDrop={closeDialogAndDrop}
            />
          ) : (
            'Nothiing'
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
