import Link from 'next/link'
import { SingleItemProps } from '@/types/IconSidebar'

export const SingleItemSidebar = (props: SingleItemProps) => {
  const { href, icon: Icon, label, action } = props
  return (
    <Link
      href={href}
      onClick={action}
      className='flex gap-2 p-1 items-center hover:bg-gray-300 duration-300 transition-all rounded-md'
    >
      <div className='bg-gray-200 dark:bg-gray-400 flex p-2 rounded-md'>
        <Icon size={19} />
      </div>
      <p className='text-[14px]'>{label}</p>
    </Link>
  )
}
