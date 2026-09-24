import {
    createContext,
    useContext,
} from 'solid-js'

export interface ContextMenuContextValue {
    open: () => boolean

    x: () => number
    y: () => number

    setOpen: (
        open: boolean,
        position?: {
            x: number
            y: number
        },
    ) => void

    openMenu: (
        x: number,
        y: number,
    ) => void

    closeMenu: () => void
}

export const ContextMenuContext =
    createContext<
        ContextMenuContextValue | undefined
    >()

export function useContextMenu() {
    const context =
        useContext(ContextMenuContext)

    if (!context) {
        throw new Error(
            'useContextMenu must be used inside <ContextMenu>.',
        )
    }

    return context
}