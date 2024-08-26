import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TabsFormLogin } from './TabLogin'
import { TabsFormRegsiter } from './TabRegister'

export const TabsForm = () => {
  return (
    <Tabs
      defaultValue='account'
      className='w-[450px] space-y-3'
    >
      <TabsList className='grid w-full grid-cols-2'>
        <TabsTrigger value='account'>Sign in</TabsTrigger>
        <TabsTrigger value='register'>Sign up</TabsTrigger>
      </TabsList>
      <TabsContent value='account'>
        <TabsFormLogin />
      </TabsContent>
      <TabsContent value='register'>
        <TabsFormRegsiter />
      </TabsContent>
    </Tabs>
  )
}
