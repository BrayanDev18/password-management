'use client'

import { TooltipComponent } from '@/components/share/Tooltip'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { LinkPreview } from '@/components/ui/link-preview'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/components/ui/use-toast'
import { copyClipboard } from '@/lib/CopyClipboard'
import { generatePassword } from '@/lib/generatePassword'
import { zodResolver } from '@hookform/resolvers/zod'
import { Element } from '@prisma/client'
import axios from 'axios'
import { Copy, Eye, GlobeLock, Shuffle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  typeElement: z.string().min(2),
  name: z.string().min(2),
  isFavorite: z.boolean().default(false),
  directory: z.string().min(2),
  userName: z.string().min(2),
  password: z.string().min(2),
  urlWebsite: z.string().min(2),
  notes: z.string(),
  userId: z.string()
})

const FormItems = {
  typeElement: '',
  name: '',
  isFavorite: false,
  directory: '',
  userName: '',
  password: '',
  urlWebsite: '',
  notes: '',
  userId: ''
}

type FormEditElementProps = {
  datatElement: Element
}

export const FormEditElement = ({ datatElement }: FormEditElementProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      typeElement: datatElement?.typeElement || '',
      name: datatElement?.name || '',
      isFavorite: datatElement.isFavorite,
      directory: datatElement?.directory || '',
      userName: datatElement?.userName || '',
      password: datatElement?.password || '',
      urlWebsite: datatElement?.urlWebsite || '',
      notes: datatElement?.notes || '',
      userId: datatElement.userId
    }
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/items/${datatElement.id}`, values)
      toast({ title: 'Item edited' })

      router.push('/')
    } catch (error) {
      toast({ title: 'Something went wrong', variant: 'destructive' })
    }
  }

  const generateRandomPassword = () => {
    const password = generatePassword()
    form.setValue('password', password)
  }

  const updateUrl = () => {
    form.setValue('urlWebsite', window.location.href)
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='grid md:grid-cols-2 gap-y-2 gap-x-4'
        >
          <FormField
            control={form.control}
            name='typeElement'
            render={({ field }) => (
              <FormItem>
                <FormLabel>What kind of element do you need?</FormLabel>
                <Select
                  defaultValue={field.value}
                  onValueChange={field.onChange}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select a directory for your password' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='Inicio de sesión'>Logins</SelectItem>
                    <SelectItem value='cards'>Cards</SelectItem>
                    <SelectItem value='identification'>IDE</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='isFavorite'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Do you wanna add this password to favorites?
                </FormLabel>
                <div className='flex flex-row items-center space-x-3 space-y-0 p-2'>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel>Check such as favorite</FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder='Enter your full name'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='directory'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Directory</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select a directory' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='Social'>Social</SelectItem>
                    <SelectItem value='Arts'>Arts</SelectItem>
                    <SelectItem value='Shopping'>Shopping</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='userName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>User</FormLabel>
                <FormControl>
                  <div className='relative'>
                    <Input
                      {...field}
                      placeholder='Enter your user name'
                    />
                    <Copy
                      className='absolute top-3 right-4 cursor-pointer'
                      size={18}
                      onClick={() => {
                        copyClipboard(field.value)
                      }}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='urlWebsite'
            render={({ field }) => (
              <FormItem>
                <FormLabel>URL Website</FormLabel>
                <FormControl>
                  <div className='relative'>
                    <LinkPreview
                      url={field.value}
                      className='font-bold cursor-pointer'
                    >
                      <Input
                        {...field}
                        className='pr-9 truncate'
                        placeholder='Enter the website name'
                      />
                    </LinkPreview>

                    <GlobeLock
                      className='absolute top-3 right-3 ml-20 cursor-pointer'
                      size={18}
                      onClick={updateUrl}
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
                <FormLabel className='flex justify-between'>
                  Password
                  <TooltipComponent
                    label='Random password'
                    element={
                      <Shuffle
                        size={15}
                        className='cursor-pointer'
                        onClick={generateRandomPassword}
                      />
                    }
                  />
                </FormLabel>
                <FormControl>
                  <div className='relative'>
                    <Input
                      {...field}
                      className='pr-16 truncate'
                      placeholder='Enter your password'
                      type={showPassword ? 'text' : 'password'}
                    />

                    <div className='absolute flex justify-between space-x-3 top-3 right-3 '>
                      <Eye
                        size={18}
                        className='cursor-pointer'
                        onClick={() => setShowPassword((current) => !current)}
                      />

                      <Copy
                        className='cursor-pointer'
                        size={16}
                        onClick={() => {
                          copyClipboard(field.value)
                        }}
                      />
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <div className='flex items-center justify-between text-sm'>
              Authentication TOTP
              <span className='flex gap-2 text-xs px-2 py-1 font-medium bg-secondary-purple rounded-md'>
                Premium
              </span>
            </div>
            <Input disabled />
          </div>

          <FormField
            control={form.control}
            name='notes'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Notes</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder='Write some notes to identify your element'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div />

          <Button
            type='submit'
            className='bg-secondary-purple hover:bg-primary-purple'
          >
            Save
          </Button>
        </form>
      </Form>
    </div>
  )
}
