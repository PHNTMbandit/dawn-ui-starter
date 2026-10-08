import { useNavigate } from '@tanstack/react-router'
import { Button, cn } from 'dawn-ui-react'

import { signOut } from '@/lib/auth-client.ts'

type SignOutProps = React.ComponentProps<'button'>

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
      Sign out
    </Button>
  )
}
