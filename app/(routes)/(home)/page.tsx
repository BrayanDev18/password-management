import { getServerSession } from 'next-auth'
import { HeaderMain } from './_components/HeaderMain'
import { redirect } from 'next/navigation'
import { db } from '@/lib/db'
import { DataTableComponent } from '../../../components/share/DataTable'

export default async function HomePage() {
  const session = await getServerSession()

  if (!session || !session.user?.email) redirect('/')

  const user = await db.user.findUnique({
    where: {
      email: session?.user?.email
    },
    include: {
      elements: {
        orderBy: {
          createdAt: 'desc'
        }
      }
    }
  })

  if (!user || !user.elements) redirect('/')

  return (
    <div className='flex flex-col space-y-8'>
      <HeaderMain userId={user?.id} />
      <DataTableComponent elements={user.elements} />
    </div>
  )
}
