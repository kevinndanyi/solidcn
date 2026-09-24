import type { JSX } from 'solid-js'

export interface ContextMenuProps
    extends JSX.HTMLAttributes<HTMLDivElement> {
    open?: boolean
    defaultOpen?: boolean
    onOpenChange?: (open: boolean) => void
}

export interface ContextMenuTriggerProps
    extends JSX.HTMLAttributes<HTMLDivElement> {
    class?: string
}

export interface ContextMenuContentProps
    extends JSX.HTMLAttributes<HTMLDivElement> {
    class?: string
}

export interface ContextMenuItemProps
    extends JSX.HTMLAttributes<HTMLDivElement> {
    disabled?: boolean
    onSelect?: () => void
    class?: string
}

export interface ContextMenuSeparatorProps
    extends JSX.HTMLAttributes<HTMLDivElement> {
    class?: string
}