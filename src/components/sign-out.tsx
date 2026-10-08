import { useNavigate } from '@tanstack/react-router'
import { Button, cn } from 'dawn-ui-react'

import { signOut } from '@/lib/auth-client.ts'
import { m } from '@/paraglide/messages'

type SignOutProps = React.ComponentProps<'button'>

// Ends the Better Auth session, then returns the user to the sign-in route.
export function SignOut({ className, children, ref, ...props }: SignOutProps) {
  const navigate = useNavigate(),
    handleClick = async () => {
      await signOut({
        fetchOptions: {
          onSuccess: async () => {
            await navigate({ to: '/sign-in' })
          },
        },
      })
    }

  return (
    <Button
      variant="outline"
      onClick={handleClick}
      className={cn('', className)}
      ref={ref}
      {...props}
    >
      {children}
      {m['auth.signOut']()}
    </Button>
  )
}
