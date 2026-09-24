import type { JSX } from 'solid-js'

export type DrawerSide =
    | 'left'
    | 'right'
    | 'top'
    | 'bottom'

export interface DrawerProps
    extends JSX.HTMLAttributes<HTMLDivElement> {
    open?: boolean
    defaultOpen?: boolean
    onOpenChange?: (
        open: boolean,
    ) => void
    side?: DrawerSide
}

export interface DrawerTriggerProps
    extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
    class?: string
}

export interface DrawerContentProps
    extends JSX.HTMLAttributes<HTMLDivElement> {
    class?: string
}

export interface DrawerHeaderProps
    extends JSX.HTMLAttributes<HTMLDivElement> {
    class?: string
}

export interface DrawerFooterProps
    extends JSX.HTMLAttributes<HTMLDivElement> {
    class?: string
}

export interface DrawerTitleProps
    extends JSX.HTMLAttributes<HTMLHeadingElement> {
    class?: string
}

export interface DrawerDescriptionProps
    extends JSX.HTMLAttributes<HTMLParagraphElement> {
    class?: string
}

export interface DrawerCloseProps
    extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
    class?: string
}