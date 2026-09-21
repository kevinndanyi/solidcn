import type { JSX } from 'solid-js'

export interface SidebarContextValue {
    collapsed: () => boolean
    toggle: () => void
    setCollapsed: (value: boolean) => void
}

export interface SidebarProviderProps {
    children?: JSX.Element
    collapsed?: boolean
    defaultCollapsed?: boolean
    onCollapsedChange?: (collapsed: boolean) => void
    collapsible?: boolean
}

export interface SidebarProps extends JSX.HTMLAttributes<HTMLElement> {
    class?: string
    collapsed?: boolean
    defaultCollapsed?: boolean
    onCollapsedChange?: (collapsed: boolean) => void
    collapsible?: boolean
}

export interface SidebarTriggerProps
    extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
    class?: string
}

export interface SidebarHeaderProps extends JSX.HTMLAttributes<HTMLDivElement> {
    class?: string
}

export interface SidebarContentProps extends JSX.HTMLAttributes<HTMLDivElement> {
    class?: string
}

export interface SidebarFooterProps extends JSX.HTMLAttributes<HTMLDivElement> {
    class?: string
}

export interface SidebarGroupProps extends JSX.HTMLAttributes<HTMLDivElement> {
    class?: string
}

export interface SidebarGroupLabelProps
    extends JSX.HTMLAttributes<HTMLDivElement> {
    class?: string
}

export interface SidebarGroupContentProps
    extends JSX.HTMLAttributes<HTMLDivElement> {
    class?: string
}

export interface SidebarMenuProps
    extends JSX.HTMLAttributes<HTMLUListElement> {
    class?: string
}

export interface SidebarMenuItemProps
    extends JSX.LiHTMLAttributes<HTMLLIElement> {
    class?: string
}

export interface SidebarMenuButtonProps
    extends JSX.AnchorHTMLAttributes<HTMLAnchorElement> {
    class?: string
    active?: boolean
    tooltip?: string
}

export interface SidebarSeparatorProps
    extends JSX.HTMLAttributes<HTMLHRElement> {
    class?: string
}