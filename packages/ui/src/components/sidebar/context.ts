import {
    createContext,
    useContext,
} from 'solid-js'

export interface SidebarContextValue {
    collapsed: () => boolean
    mobile: () => boolean
    mobileOpen: () => boolean

    toggle: () => void
    setCollapsed: (
        collapsed: boolean,
    ) => void

    openMobile: () => void
    closeMobile: () => void
    toggleMobile: () => void
}

export const SidebarContext =
    createContext<
        SidebarContextValue | undefined
    >()

export function useSidebar() {
    const context = useContext(
        SidebarContext,
    )

    if (!context) {
        throw new Error(
            'useSidebar must be used inside <SidebarProvider> or <Sidebar>.',
        )
    }

    return context
}

export function useSidebarContext() {
    return useContext(SidebarContext)
}