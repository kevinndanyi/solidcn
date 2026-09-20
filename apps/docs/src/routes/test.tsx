import { createSignal } from 'solid-js'

import {
    Button,
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@solidcn/ui'

export default function TestPage() {
    const [
        controlledOpen,
        setControlledOpen,
    ] = createSignal(false)

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
                        Collapsible
                    </CardTitle>

                    <CardDescription>
                        Expandable content with
                        controlled and
                        uncontrolled state.
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
                        <Collapsible
                            defaultOpen
                        >
                            <CollapsibleTrigger>
                                Advanced settings
                            </CollapsibleTrigger>

                            <CollapsibleContent>
                                These settings are
                                visible when the
                                section is expanded.
                            </CollapsibleContent>
                        </Collapsible>

                        <Collapsible
                            open={
                                controlledOpen()
                            }
                            onOpenChange={
                                setControlledOpen
                            }
                        >
                            <CollapsibleTrigger>
                                Controlled section
                            </CollapsibleTrigger>

                            <CollapsibleContent>
                                This section is
                                controlled by the
                                parent component.
                            </CollapsibleContent>
                        </Collapsible>

                        <Collapsible
                            disabled
                        >
                            <CollapsibleTrigger>
                                Disabled section
                            </CollapsibleTrigger>

                            <CollapsibleContent>
                                You should not be
                                able to open this
                                section.
                            </CollapsibleContent>
                        </Collapsible>
                    </div>
                </CardContent>

                <CardFooter>
                    <Button
                        variant="secondary"
                        onClick={() =>
                            setControlledOpen(
                                !controlledOpen(),
                            )
                        }
                    >
                        {controlledOpen()
                            ? 'Close controlled'
                            : 'Open controlled'}
                    </Button>
                </CardFooter>
            </Card>
        </main>
    )
}