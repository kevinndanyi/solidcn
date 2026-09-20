import {
    Button,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    Confirmation,
    ConfirmationActions,
    ConfirmationCancel,
    ConfirmationConfirm,
    ConfirmationDescription,
    ConfirmationTitle,
} from '@solidcn/ui'

import {
    createSignal,
} from 'solid-js'

export default function TestPage() {
    const [open, setOpen] =
        createSignal(false)

    const [dangerOpen, setDangerOpen] =
        createSignal(false)

    const [loading, setLoading] =
        createSignal(false)

    const handleConfirm = () => {
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
            setOpen(false)
        }, 1500)
    }

    return (
        <main
            style={{
                padding: '2rem',
                'max-width': '56rem',
                margin: '0 auto',
            }}
        >
            <Card>
                <CardHeader>
                    <CardTitle>
                        Confirmation
                    </CardTitle>
                </CardHeader>

                <CardContent
                    style={{
                        display: 'flex',
                        'flex-direction': 'column',
                        gap: '1rem',
                    }}
                >
                    <Button
                        onClick={() => setOpen(true)}
                    >
                        Open confirmation
                    </Button>

                    <Button
                        variant="danger"
                        onClick={() =>
                            setDangerOpen(true)
                        }
                    >
                        Delete account
                    </Button>
                </CardContent>
            </Card>

            <Confirmation
                open={open()}
                onOpenChange={setOpen}
                onConfirm={handleConfirm}
                loading={loading()}
            >
                <ConfirmationTitle>
                    Save changes?
                </ConfirmationTitle>

                <ConfirmationDescription>
                    Your changes have not been
                    saved yet. Would you like to
                    save them before continuing?
                </ConfirmationDescription>

                <ConfirmationActions>
                    <ConfirmationCancel>
                        Cancel
                    </ConfirmationCancel>

                    <ConfirmationConfirm>
                        Save changes
                    </ConfirmationConfirm>
                </ConfirmationActions>
            </Confirmation>

            <Confirmation
                open={dangerOpen()}
                onOpenChange={setDangerOpen}
                variant="danger"
                onConfirm={() =>
                    setDangerOpen(false)
                }
            >
                <ConfirmationTitle>
                    Delete account?
                </ConfirmationTitle>

                <ConfirmationDescription>
                    This action cannot be undone.
                    All account data will be
                    permanently removed.
                </ConfirmationDescription>

                <ConfirmationActions>
                    <ConfirmationCancel>
                        Cancel
                    </ConfirmationCancel>

                    <ConfirmationConfirm>
                        Delete account
                    </ConfirmationConfirm>
                </ConfirmationActions>
            </Confirmation>
        </main>
    )
}