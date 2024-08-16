
// app/components/ContactForm.tsx
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ContactFormSchema } from '../../lib/schema'
import { sendEmail } from '../actions'
import { toast } from 'sonner'

export type ContactFormInputs = z.infer<typeof ContactFormSchema>

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema)
  })

  const onSubmit = async (data: ContactFormInputs) => {
    const result = await sendEmail(data)

    if (result?.success) {
      toast.success('Email sent!')
      reset()
    } else {
      toast.error('Something went wrong!')
      console.error(result?.error)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='mx-auto flex flex-1 flex-col max-w-2xl px-2'
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-zinc-200 font-medium">Name:</label>
          <input
            {...register('name')}
            placeholder="John Snow"
            className='w-full rounded-lg px-3 py-2 mt-2 border border-zinc-600 hover:border-zinc-500 placeholder:text-zinc-600 bg-zinc-900'
          />
          {errors.name?.message && (
            <p className='ml-1 mt-1 text-sm text-red-400'>
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-zinc-100 font-medium">Email:</label>
          <input
            id="email"
            placeholder="john@thenorth.com"
            type="email"
            className='w-full rounded-lg px-3 py-2 mt-2 border border-zinc-600 hover:border-zinc-500 placeholder:text-zinc-600 bg-zinc-900'
            {...register('email')}
          />
          {errors.email?.message && (
            <p className='ml-1 mt-1 text-sm text-red-400'>
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-zinc-100 font-medium">Message:</label>
          <textarea
            className="min-h-[100px] mx-auto w-full rounded-lg px-3 py-2 mt-2 border border-zinc-600 hover:border-zinc-500 placeholder:text-zinc-600 bg-zinc-900"
            id="message"
            placeholder="I know nothing..."
            {...register('message')}
          />
          {errors.message?.message && (
            <p className='ml-1 text-sm text-red-400'>{errors.message.message}</p>
          )}
        </div>
        <button
          disabled={isSubmitting}
          className="mt-2 inline-flex items-center rounded-lg bg-zinc-700 py-2 px-4 text-sm/6 font-semibold text-zinc-100 shadow-inner shadow-white/10 focus:outline-none hover:bg-zinc-600 focus:bg-zinc-700 focus:outline-1 focus:outline-white"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  )
}

