import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
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
                        HoverCard
                    </CardTitle>

                    <CardDescription>
                        Contextual information
                        revealed on hover or
                        keyboard focus.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <div
                        style={{
                            display: 'flex',
                            'flex-direction':
                                'column',
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
                                Basic HoverCard
                            </p>

                            <HoverCard>
                                <HoverCardTrigger href="#">
                                    Hover over this link
                                </HoverCardTrigger>

                                <HoverCardContent>
                                    <strong>
                                        Trader profile
                                    </strong>

                                    <p
                                        style={{
                                            margin:
                                                '0.5rem 0 0',
                                        }}
                                    >
                                        This is contextual
                                        information that
                                        can be displayed
                                        without leaving the
                                        current page.
                                    </p>
                                </HoverCardContent>
                            </HoverCard>
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
                                Profile preview
                            </p>

                            <HoverCard>
                                <HoverCardTrigger href="/traders/kevin">
                                    Kevin Ndanyi
                                </HoverCardTrigger>

                                <HoverCardContent>
                                    <div
                                        style={{
                                            display: 'flex',
                                            'flex-direction':
                                                'column',
                                            gap: '0.5rem',
                                        }}
                                    >
                                        <strong>
                                            Kevin Ndanyi
                                        </strong>

                                        <span
                                            style={{
                                                color:
                                                    'var(--scn-muted-foreground)',
                                            }}
                                        >
                                            Forex trader
                                        </span>

                                        <span>
                                            London session
                                            specialist
                                        </span>
                                    </div>
                                </HoverCardContent>
                            </HoverCard>
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
                                Custom delay
                            </p>

                            <HoverCard
                                openDelay={500}
                                closeDelay={300}
                            >
                                <HoverCardTrigger href="#">
                                    Delayed HoverCard
                                </HoverCardTrigger>

                                <HoverCardContent>
                                    This card uses a
                                    500ms opening delay and
                                    a 300ms closing delay.
                                </HoverCardContent>
                            </HoverCard>
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
                                Disabled
                            </p>

                            <HoverCard disabled>
                                <HoverCardTrigger href="#">
                                    Disabled HoverCard
                                </HoverCardTrigger>

                                <HoverCardContent>
                                    This content should
                                    never open.
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </main>
    )
}