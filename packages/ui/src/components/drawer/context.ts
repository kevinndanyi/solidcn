import {
    createContext,
    useContext,
} from 'solid-js'

import type {
    DrawerSide,
} from './types'

export interface DrawerContextValue {
    open: () => boolean
    side: () => DrawerSide

    setOpen: (
        open: boolean,
    ) => void

    openDrawer: () => void
    closeDrawer: () => void
    toggle: () => void
}

export const DrawerContext =
    createContext<
        DrawerContextValue | undefined
    >()

export function useDrawer() {
    const context =
        useContext(DrawerContext)

    if (!context) {
        throw new Error(
            'useDrawer must be used inside <Drawer>.',
        )
    }

    return context
}