import { Logo } from '@/components/share/Logo/Logo'
import { Sidebar } from '@/components/share/Sidebar'
import { SidebarMobile } from '@/components/share/SidebarMobile'

export default function RoutesLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className='h-full'>
      <div className='flex justify-between lg:hidden px-6 py-3 items-center bg-blue-800'>
        <div className='py-1'>
          <Logo />
        </div>
        <SidebarMobile />
      </div>

      <div className='flex h-full '>
        <div className='max-w-lg hidden lg:flex h-full w-72 fixed flex-col px-4 border-r-[1px] border-r-gray-200'>
          <Sidebar />
        </div>

        <div className='w-full lg:pl-72'>
          <div className='p-6'>{children}</div>
        </div>
      </div>
    </main>
  )
}
