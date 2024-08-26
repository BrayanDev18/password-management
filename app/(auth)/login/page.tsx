import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { ImageAuth } from './_components/ImageAuth'
import { ImagesBack } from './_components/ImagesBack'
import { TabsForm } from './_components/TabsForm'
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'

export default async function LoginPage() {
  const session = await getServerSession()

  if (session) {
    redirect('/')
  }

  return (
    <BackgroundBeamsWithCollision>
      <div className='grid relative lg:grid-cols-2 h-screen w-screen overflow-hidden'>
        <div className='flex justify-center h-full'>
          <div className='grid items-center'>
            <div className='flex flex-col items-center justify-end self-end'>
              <h1 className='text-4xl font-medium text-center'>
                Welcome to{' '}
                <span className='bg-gradient-to-r from-purple-600 via-purple-300 to-purple-800 bg-clip-text text-transparent'>
                  Key Keeper
                </span>
              </h1>
              <p className='text-center text-slate-400 text-[14px]'>
                To continue, please enter your credentials
              </p>
            </div>

            <TabsForm />
          </div>
        </div>

        <ImagesBack />

        <ImageAuth />
      </div>
    </BackgroundBeamsWithCollision>
  )
}
