import { DataTableComponent } from '@/components/share/DataTable'
import { db } from '@/lib/db'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function LoginsPage() {
  const session = await getServerSession()

  if (!session || !session.user?.email) redirect('/')

  const user = await db.user.findUnique({
    where: {
      email: session.user.email
    },
    include: {
      elements: {
        where: {
          typeElement: 'logins'
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
      <h1>List of logins</h1>
      <DataTableComponent elements={user.elements} />
    </div>
  )
}
