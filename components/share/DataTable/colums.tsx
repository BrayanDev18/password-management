'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel
} from '@/components/ui/dropdown-menu'
import { toast } from '@/components/ui/use-toast'
import { Element } from '@prisma/client'
import {
  DropdownMenu,
  DropdownMenuTrigger
} from '@radix-ui/react-dropdown-menu'
import { ColumnDef } from '@tanstack/react-table'
import { Copy, MoreHorizontal, User } from 'lucide-react'

export const columns: ColumnDef<Element>[] = [
  {
    accessorKey: 'name',
    header: 'Name'
  },
  {
    accessorKey: 'typeElement',
    header: 'Type element'
  },
  {
    accessorKey: 'urlWebsite',
    header: 'URL website'
  },
  {
    accessorKey: 'directory',
    header: 'directory'
  },
  {
    accessorKey: 'acstions',
    header: 'URL Actions',
    cell: ({ row }) => {
      const password = row.original.password
      const userName = row.original.userName

      const editElement = () => {
        window.location.href = `/element/${row.original.id}`
      }

      const copyElement = (item: string, name: string) => {
        navigator.clipboard.writeText(item)
        toast({ title: `${name} copied` })
      }

      return (
        <div className='flex gap-2 items-center justify-around'>
          {password ? (
            <Copy
              size={18}
              className='cursor-pointer'
              onClick={() => copyElement(password, 'Password')}
            />
          ) : null}

          {userName ? (
            <User
              size={18}
              className='cursor-pointer'
              onClick={() => copyElement(userName, 'Password')}
            />
          ) : null}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant='ghost'
                className='h-8 w-8 p-0'
              >
                <span className='sr-only'>Open menu</span>
                <MoreHorizontal className='h-4 w-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={editElement}>Edit</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    }
  }
]
