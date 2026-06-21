import { ParaglideMessage } from '@inlang/paraglide-js-react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Button, Separator } from 'dawn-ui-react'
import { m } from '#/paraglide/messages.js'

export const Route = createFileRoute('/sign-up')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="h-full lg:grid lg:grid-cols-2">
      <div className="hidden bg-neutral-container lg:block" />
      <div className="flex h-full w-2/3 flex-col items-center justify-center gap-xl place-self-center text-center lg:w-1/3">
        <div className="w-full space-y-xs">
          <h1 className="style-text-strong-4">{m['auth.signUp.title']()}</h1>
          <p className="text-on-surface-muted">Create your account to get started</p>
        </div>
        <div className="flex w-full flex-col items-center gap-lg">
          {/* TODO: Add SignUpForm component */}
          <div className="w-full space-y-md rounded-lg border p-lg text-left">
            <p className="style-text-prose--1 text-on-surface-muted">
              Sign up form coming soon. For now, use the sign-in page with demo credentials.
            </p>
            <Link to="/sign-in" className="block">
              <Button className="w-full">Go to Sign In</Button>
            </Link>
          </div>
          <Separator>OR</Separator>
        </div>
        <p className="style-text-prose--1">
          <ParaglideMessage
            inputs={{}}
            message={m['auth.signUp.buttons.haveAccount']}
            markup={{
              g: ({ children }) => (
                <Link
                  to="/sign-in"
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
