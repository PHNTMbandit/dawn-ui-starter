// oxlint-disable id-length
import { createFileRoute } from '@tanstack/react-router'

import { AuthLayout } from '@/components/auth-layout'
import { SignInForm } from '@/features/auth/components/sign-in-form.tsx'
import { m } from '@/paraglide/messages.js'
import { getFormDataFromServer } from '@/utils/form-data.ts'

// Load server form state before rendering the localized sign-in form.
export const Route = createFileRoute('/sign-in')({
  component: RouteComponent,
  loader: async () => ({
    state: await getFormDataFromServer(),
  }),
})

function RouteComponent() {
  const { state } = Route.useLoaderData()

  return (
    <AuthLayout>
      <div className="w-full space-y-xs">
        <h1 className="style-text-strong-4">{m['auth.signIn.title']()}</h1>
        <p>{m['auth.signIn.description']()}</p>
      </div>
      <SignInForm state={state} />
    </AuthLayout>
  )
}
