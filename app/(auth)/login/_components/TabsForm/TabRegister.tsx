'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { Lock, Mail, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
  userName: z.string().min(2).max(50)
})

export const TabsFormRegsiter = () => {
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      userName: ''
    }
  })

  const onSubmitRegister = async (values: z.infer<typeof formSchema>) => {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        email: values.email,
        password: values.password,
        userName: values.userName
      })
    })

    if (response.status === 200) {
      toast({
        title: 'Success register'
      })

      router.push('/')
    } else {
      toast({
        title: 'Something wrong, check your information'
      })
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Register</CardTitle>
        {/* <CardDescription>
          Make sure all your fields are fill.
        </CardDescription> */}
      </CardHeader>
      <CardContent className='space-y-4'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmitRegister)}
            className='space-y-5'
          >
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor='email'>Email</Label>
                  <FormControl>
                    <div className='relative'>
                      <Mail
                        size={16}
                        color='gray'
                        className='absolute top-3 left-2'
                      />
                      <Input
                        {...field}
                        id='email'
                        type='email'
                        className='pl-7'
                        placeholder='Enter a email'
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor='password'>Password</Label>
                  <FormControl>
                    <div className='relative'>
                      <Lock
                        size={16}
                        color='gray'
                        className='absolute top-3 left-2'
                      />
                      <Input
                        {...field}
                        id='password'
                        type='password'
                        className='pl-7'
                        placeholder='Enter a  valid password'
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='userName'
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor='password'>User name</Label>
                  <FormControl>
                    <div className='relative'>
                      <User
                        size={16}
                        color='gray'
                        className='absolute top-3 left-2'
                      />
                      <Input
                        {...field}
                        id='password'
                        type='password'
                        className='pl-7'
                        placeholder='Enter a user name'
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              variant='ghost'
              type='submit'
              className='bg-secondary-purple hover:bg-primary-purple w-full'
            >
              Log in
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
