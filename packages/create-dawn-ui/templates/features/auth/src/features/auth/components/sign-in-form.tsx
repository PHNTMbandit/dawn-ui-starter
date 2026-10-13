import { PasswordIcon, SignInIcon, UserIcon } from '@phosphor-icons/react/dist/ssr'
import { mergeForm, useTransform } from '@tanstack/react-form-start'
import type { ServerFormState } from '@tanstack/react-form-start'
import { useNavigate } from '@tanstack/react-router'
import { cn, Field, Form, InputGroupAddon, useAppForm } from 'dawn-ui-react'

import { m } from '@/paraglide/messages'

import { signInFormOpts, signInSchema } from '../schema/sign-in-schema'
import { handleSignInForm } from '../server/sign-in-action'

// Customize validation in the schema and credential handling in the server action.
type SignInFormProps = React.ComponentProps<'form'> & {
  // oxlint-disable-next-line typescript/no-explicit-any
  state: ServerFormState<any, undefined> | { errorMap: { onServer: undefined }; errors: never[] }
}

export function SignInForm({ state, className, children, ref, ...props }: SignInFormProps) {
  const navigate = useNavigate(),
    form = useAppForm({
      ...signInFormOpts,
      onSubmit: async ({ value }) => {
        try {
          const result = await handleSignInForm({
            data: value,
          })

          if (!result.success) {
            let errorMessage = m['auth.signIn.errors.invalidCredentials']()
            if (result.error === 'server') {
              errorMessage = m['auth.signIn.errors.server']()
            }
            form.setErrorMap({ onSubmit: { fields: {}, form: errorMessage } })
            return
          }

          await navigate({ to: '/dashboard' })
        } catch {
          form.setErrorMap({
            onSubmit: {
              fields: {},
              form: m['auth.signIn.errors.network'](),
            },
          })
        }
      },
      transform: useTransform((baseForm) => mergeForm(baseForm, state), [state]),
      validators: {
        onSubmit: signInSchema,
      },
    })

  return (
    <Form
      onSubmit={async (event) => {
        event.preventDefault()
        event.stopPropagation()
        await form.handleSubmit()
      }}
      encType="multipart/form-data"
      method="post"
      className={cn('w-full', className)}
      ref={ref}
      {...props}
    >
      {children}
      <form.AppForm>
        <form.FormErrors>{m['auth.signIn.errors.title']()}</form.FormErrors>
        <form.AppField name="username">
          {(field) => (
            <Field>
              <field.FieldInputGroup>
                <InputGroupAddon>
                  <UserIcon weight="bold" />
                </InputGroupAddon>
                <field.FieldInputGroupInput placeholder={m['auth.signIn.fields.username']()} />
              </field.FieldInputGroup>
              <field.FieldErrors />
            </Field>
          )}
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
          <p className="text-right style-text-default--1 text-brand-muted hover:underline">
            {m['auth.signIn.buttons.forgotPassword']()}
          </p>
        </div>
        <form.FormSubmit>
          <SignInIcon weight="bold" />
          {m['auth.signIn.buttons.signIn']()}
        </form.FormSubmit>
      </form.AppForm>
    </Form>
  )
}
