import type { JSX } from 'solid-js'

export interface MenubarProps
    extends JSX.HTMLAttributes<HTMLDivElement> {
    class?: string
}

export interface MenubarMenuProps
    extends JSX.HTMLAttributes<HTMLDivElement> {
    class?: string
}

export interface MenubarTriggerProps
    extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
    class?: string
}

export interface MenubarContentProps
    extends JSX.HTMLAttributes<HTMLDivElement> {
    class?: string
}

export interface MenubarItemProps
    extends JSX.HTMLAttributes<HTMLDivElement> {
    disabled?: boolean
    onSelect?: () => void
    class?: string
}

export interface MenubarSeparatorProps
    extends JSX.HTMLAttributes<HTMLDivElement> {
    class?: string
}