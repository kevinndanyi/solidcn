import {
    Form,
    Field,
    Label,
    Input,
    FieldDescription,
    FieldError,
    Button,
} from '@solidcn/ui'

export default function TestPage() {
    return (
        <main
            style={{
                padding: '2rem',
                'max-width': '40rem',
                margin: '0 auto',
            }}
        >
            <h1
                style={{
                    'margin-bottom': '0.5rem',
                }}
            >
                Form
            </h1>

            <p
                style={{
                    color: 'var(--scn-muted-foreground)',
                    'margin-bottom': '2rem',
                }}
            >
                A native, composable form using
                SolidCN field primitives.
            </p>

            <Form
                onSubmit={(event) => {
                    event.preventDefault()

                    console.log(
                        'Form submitted',
                    )
                }}
            >
                <Field>
                    <Label for="name">
                        Full name
                    </Label>

                    <Input
                        id="name"
                        name="name"
                        placeholder="Kevin Ndanyi"
                    />

                    <FieldDescription>
                        Enter your full name.
                    </FieldDescription>
                </Field>

                <Field>
                    <Label for="email">
                        Email
                    </Label>

                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="kevin@example.com"
                    />

                    <FieldDescription>
                        We'll never share your email.
                    </FieldDescription>
                </Field>

                <Field>
                    <Label for="username">
                        Username
                    </Label>

                    <Input
                        id="username"
                        name="username"
                        placeholder="kevin"
                        aria-invalid="true"
                        aria-describedby="username-error"
                    />

                    <FieldError id="username-error">
                        This username is already taken.
                    </FieldError>
                </Field>

                <Button type="submit">
                    Create account
                </Button>
            </Form>
        </main>
    )
}