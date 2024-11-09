// app/actions.ts

'use server'

import { z } from 'zod'
import { Resend } from 'resend'
import { ContactFormSchema } from '../lib/schema'
import ContactFormEmail from '../app/emails/ContactFormEmail'

type ContactFormInputs = z.infer<typeof ContactFormSchema>
const resend = new Resend(process.env.RESEND_API_KEY) // Fetch Resend API from environment variables

export async function sendEmail(data: ContactFormInputs) {
    const result = ContactFormSchema.safeParse(data)

    if (!result.success) {
        return { success: false, error: result.error.format() }
    }

    const { name, email, message } = result.data

    try {
        const emailData = await resend.emails.send({
            from: process.env.EMAIL_FROM as string, // Fetch "from" email from environment variables
            to: [process.env.EMAIL_TO as string],    // Fetch "to" email from environment variables
            subject: 'Contact Form Submission',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            react: ContactFormEmail({ name, email, message })
        })
        return { success: true, data: emailData }
    } catch (error) {
        return { success: false, error }
    }
}
