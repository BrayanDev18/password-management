'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { zodResolver } from '@hookform/resolvers/zod'
import { Lock, Mail } from 'lucide-react'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'

const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(2).max(50)
})

export const TabsFormLogin = () => {
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmitLogin = async (values: z.infer<typeof formSchema>) => {
    const response = await signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: false
    })

    if (response?.ok) {
      toast({
        title: 'Success register'
      })

      router.push('/')
    } else {
      toast({
        title: 'Something wrong, check your information',
        variant: 'destructive'
      })
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Account</CardTitle>
        {/* <CardDescription>
          Make changes to your account here. Click save when youre done.
        </CardDescription> */}
      </CardHeader>
      <CardContent className='space-y-4'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmitLogin)}
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
                        placeholder='Enter your email'
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
                        placeholder='Enter your password'
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
