import type { Component } from 'solid-js'
import { splitProps, useContext } from 'solid-js'
import { cx } from '@solidcn/cx'
import { SidebarContext, useSidebar } from './context'
import { SidebarProvider } from './SidebarProvider'
import type { SidebarProps } from './types'

const SidebarContentInner: Component<SidebarProps> = (props) => {
    const [local, rest] = splitProps(props, ['class', 'children'])
    const sidebar = useSidebar()

    return (
        <aside
            {...rest}
            data-collapsed={sidebar.collapsed() || undefined}
            class={cx(
                'scn-sidebar',
                sidebar.collapsed() && 'scn-sidebar--collapsed',
                local.class,
            )}
        >
            {local.children}
        </aside>
    )
}

export const Sidebar: Component<SidebarProps> = (props) => {
    const [local, rest] = splitProps(props, [
        'class',
        'children',
        'collapsed',
        'defaultCollapsed',
        'onCollapsedChange',
        'collapsible',
    ])

    const existingContext = useContext(SidebarContext)

    if (!existingContext) {
        return (
            <SidebarProvider
                collapsed={local.collapsed}
                defaultCollapsed={local.defaultCollapsed}
                onCollapsedChange={local.onCollapsedChange}
                collapsible={local.collapsible}
            >
                <SidebarContentInner class={local.class} {...rest}>
                    {local.children}
                </SidebarContentInner>
            </SidebarProvider>
        )
    }

    return (
        <SidebarContentInner class={local.class} {...rest}>
            {local.children}
        </SidebarContentInner>
    )
}