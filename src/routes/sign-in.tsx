// oxlint-disable id-length
import { ParaglideMessage } from '@inlang/paraglide-js-react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Separator } from 'dawn-ui-react'

import { SignInForm } from '@/features/auth/components/sign-in-form.tsx'
import { m } from '@/paraglide/messages.js'
import { getFormDataFromServer } from '@/utils/form-data.ts'

export const Route = createFileRoute('/sign-in')({
  component: RouteComponent,
  loader: async () => ({
    state: await getFormDataFromServer(),
  }),
})

function RouteComponent() {
  const { state } = Route.useLoaderData()

  return (
    <div className="h-screen lg:grid lg:grid-cols-2">
      <div className="hidden bg-neutral-container lg:block" />
      <div className="flex h-full w-2/3 flex-col items-center justify-center gap-xl place-self-center text-center lg:w-1/3">
        <div className="w-full space-y-xs">
          <h1 className="style-text-strong-4">{m['auth.signIn.title']()}</h1>
          <p>{m['auth.signIn.description']()}</p>
        </div>
        <div className="flex w-full flex-col items-center gap-lg">
          <SignInForm state={state} />
          <Separator>OR</Separator>
        </div>
        <p className="style-text-prose--1">
          <ParaglideMessage
            inputs={{}}
            message={m['auth.signIn.noAccount']}
            markup={{
              g: ({ children }) => (
                <Link
                  to="/sign-up"
                  className="style-text-default--1 text-brand-muted hover:underline"
                >
                  {children}
                </Link>
              ),
            }}
          />
        </p>
      </div>
    </div>
  )
}
