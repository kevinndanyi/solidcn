import { createContext, useContext } from 'solid-js'
import type { SidebarContextValue } from './types'

export const SidebarContext = createContext<SidebarContextValue>()

export function useSidebar(): SidebarContextValue {
    const context = useContext(SidebarContext)

    if (!context) {
        throw new Error(
            'Sidebar components must be used inside <SidebarProvider> or <Sidebar>.',
        )
    }

    return context
}