import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@solidcn/ui'

export default function Test() {
    return (
        <main
            style={{
                padding: '2rem',
                'max-width': '32rem',
                margin: '0 auto',
            }}
        >
            <h1>Command</h1>

            <p
                style={{
                    color: 'var(--scn-muted-foreground)',
                    'margin-bottom': '1.5rem',
                }}
            >
                Search through available commands.
            </p>

            <Command
                onSelect={(value) => {
                    console.log('Selected:', value)
                }}
            >
                <CommandInput placeholder="Search commands..." />

                <CommandList>
                    <CommandEmpty>
                        No results found.
                    </CommandEmpty>

                    <CommandGroup heading="Account">
                        <CommandItem value="Profile">
                            Profile
                        </CommandItem>

                        <CommandItem value="Settings">
                            Settings
                        </CommandItem>

                        <CommandItem value="Billing">
                            Billing
                        </CommandItem>

                        <CommandItem
                            value="Security"
                            disabled
                        >
                            Security
                        </CommandItem>
                    </CommandGroup>

                    <CommandGroup heading="Trading">
                        <CommandItem value="Trade Journal">
                            Trade Journal
                        </CommandItem>

                        <CommandItem value="Trading Accounts">
                            Trading Accounts
                        </CommandItem>

                        <CommandItem value="Markets">
                            Markets
                        </CommandItem>

                        <CommandItem value="Analytics">
                            Analytics
                        </CommandItem>
                    </CommandGroup>

                    <CommandGroup heading="Platform">
                        <CommandItem value="Dashboard">
                            Dashboard
                        </CommandItem>

                        <CommandItem value="Notifications">
                            Notifications
                        </CommandItem>

                        <CommandItem value="Help Center">
                            Help Center
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </Command>
        </main>
    )
}