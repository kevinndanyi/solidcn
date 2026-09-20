
import {
  Button,
  ToastProvider,
  useToast,
} from '@solidcn/ui'

function ToastDemo() {
  const { toast } = useToast()

  return (
    <div
      style={{
        display: 'flex',
        'flex-wrap': 'wrap',
        gap: '0.75rem',
      }}
    >
      <Button
        onClick={() =>
          toast({
            title: 'Default notification',
            description:
              'This is a default toast.',
          })
        }
      >
        Default
      </Button>

      <Button
        onClick={() =>
          toast({
            title: 'Trade saved',
            description:
              'Your trade journal has been updated.',
            variant: 'success',
          })
        }
      >
        Success
      </Button>

      <Button
        onClick={() =>
          toast({
            title: 'Market update',
            description:
              'EURUSD is approaching your watch level.',
            variant: 'info',
          })
        }
      >
        Info
      </Button>

      <Button
        onClick={() =>
          toast({
            title: 'Risk warning',
            description:
              'Your daily risk limit is almost reached.',
            variant: 'warning',
          })
        }
      >
        Warning
      </Button>

      <Button
        variant="danger"
        onClick={() =>
          toast({
            title: 'Trade failed',
            description:
              'The trade could not be submitted.',
            variant: 'danger',
          })
        }
      >
        Danger
      </Button>
    </div>
  )
}

export default function Test() {
  return (
    <ToastProvider>
      <main
        style={{
          padding: '2rem',
          'max-width': '42rem',
          margin: '0 auto',
        }}
      >
        <h1>Toast</h1>

        <p
          style={{
            color:
              'var(--scn-muted-foreground)',
            'margin-bottom': '2rem',
          }}
        >
          Test all toast variants, automatic
          dismissal, manual dismissal, and the
          Lucide close icon.
        </p>

        <ToastDemo />
      </main>
    </ToastProvider>
  )
}
