import type { Component } from 'solid-js'
import {
    createEffect,
    createSignal,
    onCleanup,
    onMount,
} from 'solid-js'

import {
    SidebarContext,
    type SidebarContextValue,
} from './context'

import type {
    SidebarProviderProps,
} from './types'

export const SidebarProvider: Component<
    SidebarProviderProps
> = (props) => {
    const [internalCollapsed, setInternalCollapsed] =
        createSignal(
            props.defaultCollapsed ?? false,
        )

    const [internalMobileOpen, setInternalMobileOpen] =
        createSignal(
            props.defaultMobileOpen ?? false,
        )

    const [mobile, setMobile] =
        createSignal(false)

    const mobileBreakpoint =
        () =>
            props.mobileBreakpoint ??
            768

    const collapsed = () =>
        props.collapsed !== undefined
            ? props.collapsed
            : internalCollapsed()

    const mobileOpen = () =>
        props.mobileOpen !== undefined
            ? props.mobileOpen
            : internalMobileOpen()

    const setCollapsed = (
        value: boolean,
    ) => {
        if (
            props.collapsed === undefined
        ) {
            setInternalCollapsed(value)
        }

        props.onCollapsedChange?.(value)
    }

    const setMobileOpen = (
        value: boolean,
    ) => {
        if (
            props.mobileOpen === undefined
        ) {
            setInternalMobileOpen(value)
        }

        props.onMobileOpenChange?.(value)
    }

    const openMobile = () => {
        setMobileOpen(true)
    }

    const closeMobile = () => {
        setMobileOpen(false)
    }

    const toggleMobile = () => {
        setMobileOpen(!mobileOpen())
    }

    const toggle = () => {
        if (mobile()) {
            toggleMobile()
            return
        }

        if (props.collapsible === false) {
            return
        }

        setCollapsed(!collapsed())
    }

    const updateViewport = () => {
        if (typeof window === 'undefined') {
            return
        }

        setMobile(
            window.innerWidth <
            mobileBreakpoint(),
        )
    }

    const handleKeyDown = (
        event: KeyboardEvent,
    ) => {
        if (
            (event.ctrlKey || event.metaKey) &&
            event.key.toLowerCase() === 'b'
        ) {
            event.preventDefault()
            toggle()
            return
        }

        if (
            event.key === 'Escape' &&
            mobile() &&
            mobileOpen()
        ) {
            event.preventDefault()
            closeMobile()
        }
    }

    onMount(() => {
        updateViewport()

        window.addEventListener(
            'resize',
            updateViewport,
        )

        document.addEventListener(
            'keydown',
            handleKeyDown,
        )

        onCleanup(() => {
            window.removeEventListener(
                'resize',
                updateViewport,
            )

            document.removeEventListener(
                'keydown',
                handleKeyDown,
            )
        })
    })

    createEffect(() => {
        if (!mobile()) {
            closeMobile()
        }
    })

    const context: SidebarContextValue = {
        collapsed,
        mobile,
        mobileOpen,

        toggle,
        setCollapsed,

        openMobile,
        closeMobile,
        toggleMobile,
    }

    return (
        <SidebarContext.Provider
            value={context}
        >
            {props.children}
        </SidebarContext.Provider>
    )
}