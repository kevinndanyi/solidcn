
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
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
      <h1>Dropdown Menu</h1>

      <p
        style={{
          color:
            'var(--scn-muted-foreground)',
          'margin-bottom': '2rem',
        }}
      >
        Test opening, closing, keyboard
        navigation, disabled items, and the
        Lucide chevron.
      </p>

      <DropdownMenu>
        <DropdownMenuTrigger>
          Account
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuItem>
            Profile
          </DropdownMenuItem>

          <DropdownMenuItem>
            Settings
          </DropdownMenuItem>

          <DropdownMenuItem>
            Billing
          </DropdownMenuItem>

          <DropdownMenuItem disabled>
            Disabled
          </DropdownMenuItem>

          <DropdownMenuItem>
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </main>
  )
}

