import {
    createSignal,
} from 'solid-js'

import {
    DatePicker,
} from '@solidcn/ui'

export default function Test() {
    const [date, setDate] =
        createSignal<Date>()

    return (
        <main
            style={{
                padding: '2rem',
                'max-width': '32rem',
                margin: '0 auto',
            }}
        >
            <h1>DatePicker</h1>

            <p
                style={{
                    color:
                        'var(--scn-muted-foreground)',
                    'margin-bottom': '1.5rem',
                }}
            >
                Select a date using the calendar
                popover.
            </p>

            <DatePicker
                value={date()}
                onChange={(value) => {
                    setDate(value)

                    console.log(
                        'Selected:',
                        value?.toDateString(),
                    )
                }}
            />

            <p
                style={{
                    'margin-top': '1.5rem',
                    color:
                        'var(--scn-muted-foreground)',
                }}
            >
                Selected:{' '}
                {date()
                    ? date()!.toDateString()
                    : 'None'}
            </p>
        </main>
    )
}