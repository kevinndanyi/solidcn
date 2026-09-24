import {
    createContext,
    useContext,
} from 'solid-js'

export interface MenubarContextValue {
    activeMenu: () => string | null

    setActiveMenu: (
        id: string | null,
    ) => void

    closeMenus: () => void
}

export const MenubarContext =
    createContext<
        MenubarContextValue | undefined
    >()

export function useMenubar() {
    const context =
        useContext(MenubarContext)

    if (!context) {
        throw new Error(
            'useMenubar must be used inside <Menubar>.',
        )
    }

    return context
}

export interface MenubarMenuContextValue {
    id: string

    open: () => boolean

    openMenu: () => void
    closeMenu: () => void
    toggle: () => void
}

export const MenubarMenuContext =
    createContext<
        MenubarMenuContextValue | undefined
    >()

export function useMenubarMenu() {
    const context =
        useContext(MenubarMenuContext)

    if (!context) {
        throw new Error(
            'useMenubarMenu must be used inside <MenubarMenu>.',
        )
    }

    return context
}