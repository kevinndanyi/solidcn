import { createSignal } from 'solid-js'

import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuSeparator,
    ContextMenuTrigger,
} from '@solidcn/ui'

export default function ContextMenuTestPage() {
    const [selected, setSelected] =
        createSignal('Nothing selected')

    return (
        <div
            style={{
                padding: '2rem',
                'max-width': '800px',
                margin: '0 auto',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    'flex-direction': 'column',
                    gap: '2rem',
                }}
            >
                <header>
                    <h1>Context Menu</h1>

                    <p
                        style={{
                            color:
                                'var(--scn-muted-foreground)',
                        }}
                    >
                        Right-click the area below to
                        open the context menu.
                    </p>
                </header>

                <ContextMenu>
                    <ContextMenuTrigger>
                        Right-click anywhere in this area
                    </ContextMenuTrigger>

                    <ContextMenuContent>
                        <ContextMenuItem
                            onSelect={() =>
                                setSelected('Edit')
                            }
                        >
                            Edit
                        </ContextMenuItem>

                        <ContextMenuItem
                            onSelect={() =>
                                setSelected('Duplicate')
                            }
                        >
                            Duplicate
                        </ContextMenuItem>

                        <ContextMenuSeparator />

                        <ContextMenuItem
                            onSelect={() =>
                                setSelected('Share')
                            }
                        >
                            Share
                        </ContextMenuItem>

                        <ContextMenuSeparator />

                        <ContextMenuItem
                            disabled
                        >
                            Disabled action
                        </ContextMenuItem>

                        <ContextMenuItem
                            onSelect={() =>
                                setSelected('Delete')
                            }
                        >
                            Delete
                        </ContextMenuItem>
                    </ContextMenuContent>
                </ContextMenu>

                <div>
                    <p
                        style={{
                            margin: 0,
                            color:
                                'var(--scn-muted-foreground)',
                            'font-size': '0.875rem',
                        }}
                    >
                        Last selection
                    </p>

                    <p
                        style={{
                            margin: '0.25rem 0 0',
                            'font-weight': 600,
                        }}
                    >
                        {selected()}
                    </p>
                </div>

                <div
                    style={{
                        padding: '1rem',
                        border:
                            '1px solid var(--scn-border)',
                        'border-radius':
                            'var(--scn-radius-md)',
                    }}
                >
                    <strong>
                        Keyboard test
                    </strong>

                    <p
                        style={{
                            margin:
                                '0.5rem 0 0',
                            color:
                                'var(--scn-muted-foreground)',
                            'font-size': '0.875rem',
                        }}
                    >
                        After opening the menu, test
                        Arrow Up, Arrow Down, Home,
                        End, Enter, Space, and Escape.
                    </p>
                </div>
            </div>
        </div>
    )
}