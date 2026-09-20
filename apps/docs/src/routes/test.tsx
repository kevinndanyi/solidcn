
import {
  Pagination,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
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
      <h1>Pagination</h1>

      <p
        style={{
          color:
            'var(--scn-muted-foreground)',
          'margin-bottom': '2rem',
        }}
      >
        Test pagination controls, active page
        state, navigation arrows, and the
        ellipsis icon.
      </p>

      <Pagination>
        <PaginationPrevious />

        <PaginationItem>
          1
        </PaginationItem>

        <PaginationItem active>
          2
        </PaginationItem>

        <PaginationItem>
          3
        </PaginationItem>

        <PaginationEllipsis />

        <PaginationItem>
          10
        </PaginationItem>

        <PaginationNext />
      </Pagination>
    </main>
  )
}

