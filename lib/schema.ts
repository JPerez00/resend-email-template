import { z } from 'zod'

export const FormDataSchema = z.object({
  name: z.string().min(1, 'Name is required.'),
  message: z
    .string()
    .min(1, 'Message is required.')
    .min(6, { message: 'Message must be at least 6 characters.' })
})

export const ContactFormSchema = z.object({
  name: z.string().min(1, 'Name is required.'),
  email: z.string().min(1, 'Email is required.').email('Invalid email.'),
  message: z
    .string()
    .min(1, 'Message is required.')
    .min(6, { message: 'Message must be at least 6 characters.' })
})
