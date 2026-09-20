import { createSignal } from 'solid-js'

import {
    Button,
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    Combobox,
    Field,
    FieldDescription,
    FieldError,
    Input,
    Label,
    Textarea,
} from '@solidcn/ui'

const countries = [
    {
        value: 'kenya',
        label: 'Kenya',
    },
    {
        value: 'uganda',
        label: 'Uganda',
    },
    {
        value: 'tanzania',
        label: 'Tanzania',
    },
    {
        value: 'rwanda',
        label: 'Rwanda',
    },
]

export default function TestPage() {
    const [
        email,
        setEmail,
    ] = createSignal('')

    const [
        country,
        setCountry,
    ] = createSignal<
        string | undefined
    >()

    return (
        <main
            style={{
                padding: '2rem',
                'max-width': '48rem',
                margin: '0 auto',
            }}
        >
            <Card>
                <CardHeader>
                    <CardTitle>
                        Field Components
                    </CardTitle>

                    <CardDescription>
                        Composable form field
                        primitives.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <Field>
                        <Label for="email">
                            Email address
                        </Label>

                        <Input
                            id="email"
                            type="email"
                            value={email()}
                            placeholder="you@example.com"
                            onInput={(event) =>
                                setEmail(
                                    event.currentTarget
                                        .value,
                                )
                            }
                        />

                        <FieldDescription>
                            We'll never share your
                            email address.
                        </FieldDescription>

                        <FieldError>
                            {email() &&
                                !email().includes('@')
                                ? 'Please enter a valid email address.'
                                : undefined}
                        </FieldError>
                    </Field>

                    <div
                        style={{
                            height: '1.5rem',
                        }}
                    />

                    <Field>
                        <Label for="country">
                            Country
                        </Label>

                        <Combobox
                            options={countries}
                            value={country()}
                            onChange={setCountry}
                            placeholder="Select your country"
                            searchPlaceholder="Search countries..."
                            clearable
                        />

                        <FieldDescription>
                            Select your country of
                            residence.
                        </FieldDescription>
                    </Field>

                    <div
                        style={{
                            height: '1.5rem',
                        }}
                    />

                    <Field>
                        <Label for="bio">
                            About you
                        </Label>

                        <Textarea
                            id="bio"
                            placeholder="Tell us something about yourself..."
                        />

                        <FieldDescription>
                            Keep it short and
                            informative.
                        </FieldDescription>
                    </Field>

                    <div
                        style={{
                            height: '1.5rem',
                        }}
                    />

                    <Field>
                        <Label for="error-demo">
                            Validation example
                        </Label>

                        <Input
                            id="error-demo"
                            aria-invalid="true"
                            value="invalid value"
                        />

                        <FieldError>
                            This field contains
                            an invalid value.
                        </FieldError>
                    </Field>
                </CardContent>

                <CardFooter>
                    <Button>
                        Submit
                    </Button>

                    <Button variant="secondary">
                        Cancel
                    </Button>
                </CardFooter>
            </Card>
        </main>
    )
}