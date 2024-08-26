import React from 'react'
import { Element } from '@prisma/client'
import { DataTable } from './data-table'
import { columns } from './colums'

export type DataTablePops = {
  elements: Element[]
}

export const DataTableComponent = ({ elements }: DataTablePops) => {
  return (
    <div>
      <DataTable
        columns={columns}
        data={elements}
      />
    </div>
  )
}
