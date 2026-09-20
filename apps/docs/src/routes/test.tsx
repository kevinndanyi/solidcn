import {
    AspectRatio,
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
            <Card>
                <CardHeader>
                    <CardTitle>
                        AspectRatio
                    </CardTitle>

                    <CardDescription>
                        Maintain consistent
                        proportions for media and
                        responsive content.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <div
                        style={{
                            display: 'flex',
                            'flex-direction': 'column',
                            gap: '2rem',
                        }}
                    >
                        <div>
                            <p
                                style={{
                                    margin: '0 0 0.5rem',
                                    color:
                                        'var(--scn-muted-foreground)',
                                    'font-size':
                                        'var(--scn-font-size-sm)',
                                }}
                            >
                                16:9
                            </p>

                            <AspectRatio ratio={16 / 9}>
                                <div
                                    style={{
                                        display: 'flex',
                                        'align-items': 'center',
                                        'justify-content':
                                            'center',
                                        background:
                                            'var(--scn-muted)',
                                        color:
                                            'var(--scn-muted-foreground)',
                                    }}
                                >
                                    16 : 9
                                </div>
                            </AspectRatio>
                        </div>

                        <div>
                            <p
                                style={{
                                    margin: '0 0 0.5rem',
                                    color:
                                        'var(--scn-muted-foreground)',
                                    'font-size':
                                        'var(--scn-font-size-sm)',
                                }}
                            >
                                4:3
                            </p>

                            <AspectRatio ratio={4 / 3}>
                                <div
                                    style={{
                                        display: 'flex',
                                        'align-items': 'center',
                                        'justify-content':
                                            'center',
                                        background:
                                            'var(--scn-muted)',
                                        color:
                                            'var(--scn-muted-foreground)',
                                    }}
                                >
                                    4 : 3
                                </div>
                            </AspectRatio>
                        </div>

                        <div>
                            <p
                                style={{
                                    margin: '0 0 0.5rem',
                                    color:
                                        'var(--scn-muted-foreground)',
                                    'font-size':
                                        'var(--scn-font-size-sm)',
                                }}
                            >
                                1:1
                            </p>

                            <div
                                style={{
                                    width: '12rem',
                                }}
                            >
                                <AspectRatio ratio={1}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            'align-items':
                                                'center',
                                            'justify-content':
                                                'center',
                                            background:
                                                'var(--scn-muted)',
                                            color:
                                                'var(--scn-muted-foreground)',
                                        }}
                                    >
                                        1 : 1
                                    </div>
                                </AspectRatio>
                            </div>
                        </div>

                        <div>
                            <p
                                style={{
                                    margin: '0 0 0.5rem',
                                    color:
                                        'var(--scn-muted-foreground)',
                                    'font-size':
                                        'var(--scn-font-size-sm)',
                                }}
                            >
                                Custom class
                            </p>

                            <AspectRatio
                                ratio={21 / 9}
                                class="custom-ratio"
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        'align-items': 'center',
                                        'justify-content':
                                            'center',
                                        background:
                                            'var(--scn-muted)',
                                        color:
                                            'var(--scn-muted-foreground)',
                                    }}
                                >
                                    21 : 9
                                </div>
                            </AspectRatio>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </main>
    )
}