import type { Component } from 'solid-js'
import { createSignal, onCleanup, onMount } from 'solid-js'
import { SidebarContext } from './context'
import type { SidebarContextValue, SidebarProviderProps } from './types'

export const SidebarProvider: Component<SidebarProviderProps> = (props) => {
    const [internalCollapsed, setInternalCollapsed] = createSignal(
        props.defaultCollapsed ?? false,
    )

    const isCollapsed = () =>
        props.collapsed !== undefined ? props.collapsed : internalCollapsed()

    const setCollapsed = (value: boolean) => {
        if (props.collapsed === undefined) {
            setInternalCollapsed(value)
        }
        props.onCollapsedChange?.(value)
    }

    const toggle = () => {
        if (props.collapsible === false) {
            return
        }
        setCollapsed(!isCollapsed())
    }

    const handleKeyDown = (event: KeyboardEvent) => {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'b') {
            event.preventDefault()
            toggle()
        }
    }

    onMount(() => {
        document.addEventListener('keydown', handleKeyDown)

        onCleanup(() => {
            document.removeEventListener('keydown', handleKeyDown)
        })
    })

    const context: SidebarContextValue = {
        collapsed: isCollapsed,
        toggle,
        setCollapsed,
    }

    return (
        <SidebarContext.Provider value={context}>
            {props.children}
        </SidebarContext.Provider>
    )
}