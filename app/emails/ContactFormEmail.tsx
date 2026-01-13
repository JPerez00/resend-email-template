// app/emails/ContactFormEmail.tsx
import type { ContactFormInputs } from '@/lib/contact';

export default function ContactFormEmail({ name, email, message }: ContactFormInputs) {
  return (
    <div>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Message:</strong> {message}</p>
    </div>
  );
}
