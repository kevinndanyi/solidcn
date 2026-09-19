import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@solidcn/ui'

export default function Test() {
    return (
        <main style={{ padding: '2rem' }}>
            <h1>Table</h1>

            <Table>
                <TableCaption>Recent trades</TableCaption>

                <TableHeader>
                    <TableRow>
                        <TableHead>Symbol</TableHead>
                        <TableHead>Direction</TableHead>
                        <TableHead>Entry</TableHead>
                        <TableHead>Result</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableCell>EURUSD</TableCell>
                        <TableCell>Long</TableCell>
                        <TableCell>1.1742</TableCell>
                        <TableCell>+2R</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>GBPUSD</TableCell>
                        <TableCell>Short</TableCell>
                        <TableCell>1.3528</TableCell>
                        <TableCell>-1R</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>XAUUSD</TableCell>
                        <TableCell>Long</TableCell>
                        <TableCell>3648.20</TableCell>
                        <TableCell>+3R</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>NAS100</TableCell>
                        <TableCell>Short</TableCell>
                        <TableCell>24,850</TableCell>
                        <TableCell>+1.5R</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </main>
    )
}