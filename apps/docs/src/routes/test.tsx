import {
    Command,
    CommandInput,
    CommandList,
    CommandEmpty,
    CommandGroup,
    CommandItem,
} from '@solidcn/ui'

export default function Test() {
    return (
        <main
            style={{
                padding: '2rem',
                'max-width': '42rem',
                margin: '0 auto',
            }}
        >
            <h1>Command</h1>

            <p
                style={{
                    color:
                        'var(--scn-muted-foreground)',
                    'margin-bottom': '2rem',
                }}
            >
                Test the command input, search
                filtering, keyboard navigation, and
                the Lucide search icon.
            </p>

            <Command>
                <CommandInput
                    placeholder="Search commands..."
                />

                <CommandList>
                    <CommandEmpty>
                        No commands found.
                    </CommandEmpty>

                    <CommandGroup heading="Navigation">
                        <CommandItem value="dashboard">
                            Dashboard
                        </CommandItem>

                        <CommandItem value="trading accounts">
                            Trading Accounts
                        </CommandItem>

                        <CommandItem value="trade journal">
                            Trade Journal
                        </CommandItem>

                        <CommandItem value="analytics">
                            Analytics
                        </CommandItem>
                    </CommandGroup>

                    <CommandGroup heading="Actions">
                        <CommandItem value="new trade">
                            New Trade
                        </CommandItem>

                        <CommandItem value="deposit">
                            Deposit
                        </CommandItem>

                        <CommandItem value="withdraw">
                            Withdraw
                        </CommandItem>

                        <CommandItem value="settings">
                            Settings
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </Command>
        </main>
    )
}