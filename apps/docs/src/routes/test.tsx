import {
    Callout,
    CalloutDescription,
    CalloutTitle,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
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
                        Callout
                    </CardTitle>
                </CardHeader>

                <CardContent
                    style={{
                        display: 'flex',
                        'flex-direction': 'column',
                        gap: '1rem',
                    }}
                >
                    <Callout>
                        <CalloutTitle>
                            Default callout
                        </CalloutTitle>

                        <CalloutDescription>
                            This is a neutral informational
                            message using the default
                            appearance.
                        </CalloutDescription>
                    </Callout>

                    <Callout variant="info">
                        <CalloutTitle>
                            Information
                        </CalloutTitle>

                        <CalloutDescription>
                            Your account settings have
                            been updated successfully.
                        </CalloutDescription>
                    </Callout>

                    <Callout variant="success">
                        <CalloutTitle>
                            Account verified
                        </CalloutTitle>

                        <CalloutDescription>
                            Your email address has been
                            verified and your account is
                            ready to use.
                        </CalloutDescription>
                    </Callout>

                    <Callout variant="warning">
                        <CalloutTitle>
                            Action required
                        </CalloutTitle>

                        <CalloutDescription>
                            Your password will expire in
                            seven days. Consider updating
                            it soon.
                        </CalloutDescription>
                    </Callout>

                    <Callout variant="danger">
                        <CalloutTitle>
                            Payment failed
                        </CalloutTitle>

                        <CalloutDescription>
                            We could not process your
                            payment. Please check your
                            payment details and try again.
                        </CalloutDescription>
                    </Callout>

                    <Callout
                        variant="info"
                        class="custom-callout"
                    >
                        <CalloutTitle>
                            Custom class
                        </CalloutTitle>

                        <CalloutDescription>
                            Callouts accept additional
                            classes just like the rest of
                            the SolidCN components.
                        </CalloutDescription>
                    </Callout>
                </CardContent>
            </Card>
        </main>
    )
}