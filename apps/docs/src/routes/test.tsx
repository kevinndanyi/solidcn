import {
    createSignal,
} from 'solid-js'

import {
    Button,
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    InputOTP,
} from '@solidcn/ui'

export default function TestPage() {
    const [value, setValue] =
        createSignal('')

    const [controlledValue, setControlledValue] =
        createSignal('123')

    return (
        <main
            style={{
                padding: '2rem',
                'max-width': '48rem',
                margin: '0 auto',
            }}
        >
            <h1
                style={{
                    'margin-bottom': '0.5rem',
                }}
            >
                Input OTP
            </h1>

            <p
                style={{
                    color:
                        'var(--scn-muted-foreground)',
                    'margin-bottom': '2rem',
                }}
            >
                One-time password input with
                keyboard and paste support.
            </p>

            <div
                style={{
                    display: 'flex',
                    'flex-direction': 'column',
                    gap: '2rem',
                }}
            >
                <Card>
                    <CardHeader>
                        <CardTitle>
                            Verification code
                        </CardTitle>

                        <CardDescription>
                            Enter the 6-digit code sent to
                            your phone.
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <InputOTP
                            length={6}
                            aria-label="Verification code"
                            onChange={setValue}
                        />

                        <p
                            style={{
                                'margin-top': '1rem',
                                color:
                                    'var(--scn-muted-foreground)',
                                'font-size':
                                    'var(--scn-text-sm)',
                            }}
                        >
                            Current value: {value() || '—'}
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>
                            Four-digit PIN
                        </CardTitle>

                        <CardDescription>
                            Masked input with four slots.
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <InputOTP
                            length={4}
                            mask
                            aria-label="PIN"
                        />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>
                            Controlled input
                        </CardTitle>

                        <CardDescription>
                            The value is controlled by the
                            parent component.
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <InputOTP
                            length={6}
                            value={controlledValue()}
                            onChange={setControlledValue}
                            aria-label="Controlled OTP"
                        />

                        <div
                            style={{
                                display: 'flex',
                                'align-items': 'center',
                                gap: '1rem',
                                'margin-top': '1rem',
                            }}
                        >
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() =>
                                    setControlledValue(
                                        '654321',
                                    )
                                }
                            >
                                Set 654321
                            </Button>

                            <Button
                                type="button"
                                variant="ghost"
                                onClick={() =>
                                    setControlledValue('')
                                }
                            >
                                Clear
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>
                            Disabled
                        </CardTitle>
                    </CardHeader>

                    <CardContent>
                        <InputOTP
                            length={6}
                            defaultValue="123456"
                            disabled
                            aria-label="Disabled OTP"
                        />
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}