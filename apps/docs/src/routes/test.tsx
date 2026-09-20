import { createSignal } from 'solid-js'

import {
    Button,
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    Progress,
} from '@solidcn/ui'

export default function TestPage() {
    const [
        value,
        setValue,
    ] = createSignal(72)

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
                        Progress
                    </CardTitle>

                    <CardDescription>
                        A simple determinate
                        progress indicator.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <div
                        style={{
                            display: 'flex',
                            'flex-direction':
                                'column',
                            gap: '1.5rem',
                        }}
                    >
                        <div>
                            <div
                                style={{
                                    display: 'flex',
                                    'justify-content':
                                        'space-between',
                                    'margin-bottom':
                                        '0.5rem',
                                    'font-size':
                                        '0.875rem',
                                }}
                            >
                                <span>
                                    Current progress
                                </span>

                                <span>
                                    {value()}%
                                </span>
                            </div>

                            <Progress
                                value={value()}
                                label="Current progress"
                            />
                        </div>

                        <div>
                            <p
                                style={{
                                    margin:
                                        '0 0 0.5rem',
                                    'font-size':
                                        '0.875rem',
                                    color:
                                        'var(--scn-muted-foreground)',
                                }}
                            >
                                Custom maximum
                            </p>

                            <Progress
                                value={75}
                                max={150}
                                label="Custom progress"
                            />
                        </div>

                        <div>
                            <p
                                style={{
                                    margin:
                                        '0 0 0.5rem',
                                    'font-size':
                                        '0.875rem',
                                    color:
                                        'var(--scn-muted-foreground)',
                                }}
                            >
                                Clamped values
                            </p>

                            <Progress
                                value={120}
                                label="Clamped progress"
                            />
                        </div>
                    </div>
                </CardContent>

                <CardFooter>
                    <Button
                        variant="secondary"
                        onClick={() =>
                            setValue(
                                Math.max(
                                    0,
                                    value() - 10,
                                ),
                            )
                        }
                    >
                        −10
                    </Button>

                    <Button
                        onClick={() =>
                            setValue(
                                Math.min(
                                    100,
                                    value() + 10,
                                ),
                            )
                        }
                    >
                        +10
                    </Button>

                    <Button
                        variant="ghost"
                        onClick={() =>
                            setValue(0)
                        }
                    >
                        Reset
                    </Button>
                </CardFooter>
            </Card>
        </main>
    )
}