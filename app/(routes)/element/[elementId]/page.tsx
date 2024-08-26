import { FormEditElement } from '@/components/share/FormEdit'
import { db } from '@/lib/db'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function ElementPage({
  params
}: {
  params: { paramId: string }
}) {
  const session = await getServerSession()

  if (!session || !session.user?.email) redirect('/')

  const element = await db.element.findUnique({
    where: {
      id: params?.elementId
    }
  })

  if (!element) redirect('/')

  return (
    <div>
      <h1>element page</h1>
      <div>
        <FormEditElement datatElement={element} />
      </div>
    </div>
  )
}
