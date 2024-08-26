import { DataTableComponent } from '@/components/share/DataTable'
import { db } from '@/lib/db'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function CardsPage() {
  const session = await getServerSession()

  if (!session || !session.user?.email) redirect('/')

  const user = await db.user.findUnique({
    where: {
      email: session.user.email
    },
    include: {
      elements: {
        where: {
          typeElement: 'cards'
        },
        orderBy: {
          createdAt: 'desc'
        }
      }
    }
  })

  if (!user || !user.elements) redirect('/')

  return (
    <div>
      <h1>List of Cards</h1>
      <DataTableComponent elements={user.elements} />
    </div>
  )
}
