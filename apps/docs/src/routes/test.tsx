import { createSignal } from 'solid-js'

import {
    Button,
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    Combobox,
    type ComboboxOption,
} from '@solidcn/ui'

const currencyPairs: ComboboxOption[] = [
    {
        value: 'eurusd',
        label: 'EUR/USD',
    },
    {
        value: 'gbpusd',
        label: 'GBP/USD',
    },
    {
        value: 'usdjpy',
        label: 'USD/JPY',
    },
    {
        value: 'usdchf',
        label: 'USD/CHF',
    },
    {
        value: 'audusd',
        label: 'AUD/USD',
    },
    {
        value: 'usdcad',
        label: 'USD/CAD',
    },
    {
        value: 'nzdusd',
        label: 'NZD/USD',
    },
    {
        value: 'xauusd',
        label: 'XAU/USD',
    },
    {
        value: 'us30',
        label: 'US30',
        disabled: true,
    },
]

export default function TestPage() {
    const [
        symbol,
        setSymbol,
    ] = createSignal<
        string | undefined
    >('eurusd')

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
                        Combobox
                    </CardTitle>

                    <CardDescription>
                        Search and select a trading
                        symbol.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <Combobox
                        options={
                            currencyPairs
                        }
                        value={symbol()}
                        onChange={setSymbol}
                        placeholder="Select a symbol"
                        searchPlaceholder="Search symbols..."
                        clearable
                    />

                    <div
                        style={{
                            'margin-top': '1.5rem',
                        }}
                    >
                        <strong>
                            Selected:
                        </strong>

                        <pre
                            style={{
                                'margin-top': '0.5rem',
                                padding: '1rem',
                                'border-radius': '0.5rem',
                                background:
                                    'var(--scn-muted)',
                                color:
                                    'var(--scn-foreground)',
                                'font-size': '0.875rem',
                            }}
                        >
                            {symbol() ??
                                'undefined'}
                        </pre>
                    </div>
                </CardContent>

                <CardFooter>
                    <Button
                        variant="secondary"
                        onClick={() =>
                            setSymbol(undefined)
                        }
                    >
                        Clear
                    </Button>
                </CardFooter>
            </Card>
        </main>
    )
}