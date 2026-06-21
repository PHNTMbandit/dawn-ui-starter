import { PasswordIcon, SignInIcon, UserIcon } from '@phosphor-icons/react/dist/ssr'
import { mergeForm, useTransform, type ServerFormState } from '@tanstack/react-form-start'
import { AlertTitle, cn, Field, Form, InputGroupAddon, useAppForm } from 'dawn-ui-react'
import { signInFormOpts } from '../schema/sign-in-schema'
import { handleSignInForm } from '../server/sign-in-action'
import { m } from '@/paraglide/messages'

type SignInFormProps = React.ComponentProps<'form'> & {
  state: ServerFormState<any, undefined> | { errorMap: { onServer: undefined }; errors: never[] }
}

export const SignInForm = ({ state, className, children, ref, ...props }: SignInFormProps) => {
  const form = useAppForm({
    ...signInFormOpts,
    transform: useTransform((baseForm) => mergeForm(baseForm, state), [state]),
  })

  return (
    <Form
      action={handleSignInForm.url}
      encType={'multipart/form-data'}
      method="post"
      className={cn('w-full', className)}
      ref={ref}
      {...props}
    >
      {children}
      <form.AppForm>
        <form.FormErrors>
          <AlertTitle>{m['auth.signIn.errors.invalidCredentials']()}</AlertTitle>
        </form.FormErrors>
        <form.AppField name="username">
          {(field) => {
            return (
              <Field>
                <field.FieldInputGroup>
                  <InputGroupAddon>
                    <UserIcon weight="bold" />
                  </InputGroupAddon>
                  <field.FieldInputGroupInput placeholder={m['auth.signIn.fields.username']()} />
                </field.FieldInputGroup>
                <field.FieldErrors />
              </Field>
            )
          }}
        </form.AppField>
        <form.AppField name="password">
          {(field) => (
            <Field>
              <field.FieldInputGroup>
                <InputGroupAddon>
                  <PasswordIcon weight="bold" />
                </InputGroupAddon>
                <field.FieldInputGroupInput
                  type="password"
                  placeholder={m['auth.signIn.fields.password']()}
                />
              </field.FieldInputGroup>
              <field.FieldErrors />
            </Field>
          )}
        </form.AppField>
        <div className="flex items-center justify-end">
          <a href="#" className="text-right style-text-default--1 text-brand-muted hover:underline">
            {m['auth.signIn.buttons.forgotPassword']()}
          </a>
        </div>
        <form.FormSubmit>
          <SignInIcon weight="bold" />
          {m['auth.signIn.buttons.signIn']()}
        </form.FormSubmit>
      </form.AppForm>
    </Form>
  )
}
