import {
    ProgressCircle,
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@solidcn/ui'

export default function TestPage() {
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
                Progress Circle
            </h1>

            <p
                style={{
                    color:
                        'var(--scn-muted-foreground)',
                    'margin-bottom': '2rem',
                }}
            >
                Circular progress indicator with
                configurable size and stroke.
            </p>

            <Card>
                <CardHeader>
                    <CardTitle>
                        Examples
                    </CardTitle>

                    <CardDescription>
                        Progress circles using the same
                        semantic tokens as the rest of
                        SolidCN.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <div
                        style={{
                            display: 'flex',
                            'align-items': 'center',
                            'justify-content': 'center',
                            'flex-wrap': 'wrap',
                            gap: '2rem',
                        }}
                    >
                        <ProgressCircle
                            value={25}
                            label="25 percent complete"
                        />

                        <ProgressCircle
                            value={50}
                            size={80}
                            label="50 percent complete"
                        />

                        <ProgressCircle
                            value={75}
                            size={96}
                            strokeWidth={8}
                            label="75 percent complete"
                        />

                        <ProgressCircle
                            value={100}
                            size={112}
                            strokeWidth={10}
                            label="100 percent complete"
                        />
                    </div>
                </CardContent>
            </Card>

            <Card
                style={{
                    'margin-top': '1.5rem',
                }}
            >
                <CardHeader>
                    <CardTitle>
                        Without percentage
                    </CardTitle>

                    <CardDescription>
                        The center can contain custom
                        content.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <div
                        style={{
                            display: 'flex',
                            'justify-content': 'center',
                        }}
                    >
                        <ProgressCircle
                            value={68}
                            size={120}
                            strokeWidth={8}
                            showValue={false}
                            label="Loading"
                        >
                            <span
                                style={{
                                    'font-size':
                                        'var(--scn-text-xs)',
                                    color:
                                        'var(--scn-muted-foreground)',
                                }}
                            >
                                Loading
                            </span>
                        </ProgressCircle>
                    </div>
                </CardContent>
            </Card>

            <Card
                style={{
                    'margin-top': '1.5rem',
                }}
            >
                <CardHeader>
                    <CardTitle>
                        Custom maximum
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <div
                        style={{
                            display: 'flex',
                            gap: '2rem',
                            'align-items': 'center',
                            'justify-content': 'center',
                        }}
                    >
                        <ProgressCircle
                            value={3}
                            max={5}
                            size={80}
                            label="3 of 5 complete"
                        />

                        <ProgressCircle
                            value={7}
                            max={10}
                            size={80}
                            label="7 of 10 complete"
                        />
                    </div>
                </CardContent>
            </Card>
        </main>
    )
}