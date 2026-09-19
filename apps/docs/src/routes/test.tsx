import {
    Calendar,
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
            <h1>Calendar</h1>

            <p
                style={{
                    color:
                        'var(--scn-muted-foreground)',
                    'margin-bottom': '1.5rem',
                }}
            >
                Select a date, navigate between
                months, and test keyboard navigation.
            </p>

            <Calendar
                onSelect={(date) => {
                    console.log(
                        'Selected:',
                        date.toDateString(),
                    )
                }}
            />
        </main>
    )
}