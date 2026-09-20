import {
    Button,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@solidcn/ui'

export default function TestPage() {
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
                        Sheet
                    </CardTitle>
                </CardHeader>

                <CardContent
                    style={{
                        display: 'flex',
                        'flex-direction': 'column',
                        gap: '1rem',
                    }}
                >
                    <Sheet>
                        <SheetTrigger>
                            Open right sheet
                        </SheetTrigger>

                        <SheetContent side="right">
                            <SheetHeader>
                                <SheetTitle>
                                    Edit profile
                                </SheetTitle>

                                <SheetDescription>
                                    Update your profile
                                    information and save your
                                    changes.
                                </SheetDescription>
                            </SheetHeader>

                            <div
                                style={{
                                    padding: '1.5rem',
                                    'flex-grow': '1',
                                }}
                            >
                                <p>
                                    Sheet content goes here.
                                </p>

                                <p
                                    style={{
                                        color:
                                            'var(--scn-muted-foreground)',
                                        'font-size':
                                            'var(--scn-text-sm)',
                                        'margin-top': '0.5rem',
                                    }}
                                >
                                    This area can contain forms,
                                    navigation, settings, or
                                    other application content.
                                </p>
                            </div>

                            <SheetFooter>
                                <SheetClose>
                                    Cancel
                                </SheetClose>

                                <Button>
                                    Save changes
                                </Button>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>

                    <Sheet>
                        <SheetTrigger>
                            Open left sheet
                        </SheetTrigger>

                        <SheetContent side="left">
                            <SheetHeader>
                                <SheetTitle>
                                    Navigation
                                </SheetTitle>

                                <SheetDescription>
                                    Application navigation
                                    example.
                                </SheetDescription>
                            </SheetHeader>

                            <div
                                style={{
                                    padding: '1.5rem',
                                }}
                            >
                                <p>Dashboard</p>
                                <p>Analytics</p>
                                <p>Transactions</p>
                                <p>Settings</p>
                            </div>
                        </SheetContent>
                    </Sheet>

                    <Sheet>
                        <SheetTrigger>
                            Open top sheet
                        </SheetTrigger>

                        <SheetContent side="top">
                            <SheetHeader>
                                <SheetTitle>
                                    Top sheet
                                </SheetTitle>

                                <SheetDescription>
                                    Sheets can slide from any
                                    edge of the viewport.
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>

                    <Sheet>
                        <SheetTrigger>
                            Open bottom sheet
                        </SheetTrigger>

                        <SheetContent side="bottom">
                            <SheetHeader>
                                <SheetTitle>
                                    Bottom sheet
                                </SheetTitle>

                                <SheetDescription>
                                    Useful for mobile-oriented
                                    actions and controls.
                                </SheetDescription>
                            </SheetHeader>

                            <SheetFooter>
                                <SheetClose>
                                    Close
                                </SheetClose>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>

                    <Sheet defaultOpen>
                        <SheetContent side="right">
                            <SheetHeader>
                                <SheetTitle>
                                    Default open
                                </SheetTitle>

                                <SheetDescription>
                                    This sheet starts open using
                                    defaultOpen.
                                </SheetDescription>
                            </SheetHeader>

                            <SheetFooter>
                                <SheetClose>
                                    Close
                                </SheetClose>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </CardContent>
            </Card>
        </main>
    )
}