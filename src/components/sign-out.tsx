import { useNavigate } from '@tanstack/react-router'
import { Button, cn } from 'dawn-ui-react'
import { signOut } from '#/lib/auth-client.ts'

type SignOutProps = React.ComponentProps<'button'>

export const SignOut = ({ className, children, ref, ...props }: SignOutProps) => {
  const navigate = useNavigate()

  const handleClick = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          navigate({ to: '/sign-in' })
        },
      },
    })
  }

  return (
    <Button
      variant={'outline'}
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
