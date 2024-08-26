'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import {
  dataSidebarConfig,
  dataSidebarElements
} from '@/constants/sidebar.data'
import { BarChart, DoorClosed, House, RectangleEllipsis } from 'lucide-react'
import Link from 'next/link'
import { SingleItemSidebar } from '../SingleItemSidebar'

export const SidebarItems = () => {
  return (
    <div className='space-y-2'>
      <SingleItemSidebar
        href='/'
        label='Home'
        icon={House}
      />

      {dataSidebarElements.map(({ title, icon: Icon, children }) => (
        <Accordion
          key={title}
          type='single'
          collapsible
        >
          <AccordionItem
            value='item-1'
            className='border-b-0'
          >
            <AccordionTrigger>
              <div className='flex gap-2 p-1 items-center'>
                <div className='bg-gray-200 dark:bg-gray-400 p-2 rounded-md'>
                  <Icon size={19} />
                </div>
                {title}
              </div>
            </AccordionTrigger>

            <AccordionContent>
              {children.map(({ item, href, icon: Icon }) => (
                <div key={item}>
                  <Link
                    href={href}
                    className='px-4 py-2 flex gap-2 items-center hover:bg-gray-200 duration-300 transition-all rounded-md'
                  >
                    <Icon size={18} />
                    {item}
                  </Link>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}

      {dataSidebarConfig.map(({ title, icon: Icon, children }) => (
        <Accordion
          type='single'
          collapsible
          key={title}
        >
          <AccordionItem
            value='item-1'
            className='border-b-0'
          >
            <AccordionTrigger>
              <div className='flex gap-2 p-1 items-center'>
                <div className='bg-gray-200 dark:bg-gray-400 p-2 rounded-md'>
                  <Icon size={19} />
                </div>
                {title}
              </div>
            </AccordionTrigger>

            <AccordionContent>
              {children.map(({ item, href, icon: Icon, premium }) => (
                <div
                  key={item}
                  className='flex items-center justify-between hover:bg-gray-200 dark:hover:bg-gray-700 duration-300 transition-all rounded-md pr-1'
                >
                  <Link
                    href={href}
                    className='px-4 py-2 flex gap-2 items-center'
                  >
                    <Icon size={18} />
                    {item}
                  </Link>
                  {premium && (
                    <span className='flex gap-2 text-xs px-2 py-1 bg-purple-500 rounded-md'>
                      Premium
                    </span>
                  )}
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}

      <SingleItemSidebar
        href='/analytic'
        label='Analytic'
        icon={BarChart}
      />

      <SingleItemSidebar
        href='#'
        label='Close session'
        icon={DoorClosed}
      />
    </div>
  )
}
