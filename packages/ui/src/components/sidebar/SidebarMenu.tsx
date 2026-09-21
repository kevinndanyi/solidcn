import type { Component } from 'solid-js'
import { splitProps } from 'solid-js'
import { cx } from '@solidcn/cx'
import { useSidebar } from './context'
import type {
    SidebarMenuButtonProps,
    SidebarMenuItemProps,
    SidebarMenuProps,
} from './types'

export const SidebarMenu: Component<SidebarMenuProps> = (props) => {
    const [local, rest] = splitProps(props, ['class', 'children'])

    return (
        <ul {...rest} class={cx('scn-sidebar__menu', local.class)}>
            {local.children}
        </ul>
    )
}

export const SidebarMenuItem: Component<SidebarMenuItemProps> = (props) => {
    const [local, rest] = splitProps(props, ['class', 'children'])

    return (
        <li {...rest} class={cx('scn-sidebar__menu-item', local.class)}>
            {local.children}
        </li>
    )
}

export const SidebarMenuButton: Component<SidebarMenuButtonProps> = (props) => {
    const [local, rest] = splitProps(props, [
        'class',
        'children',
        'active',
        'tooltip',
    ])

    const sidebar = useSidebar()

    return (
        <a
            {...rest}
            class={cx(
                'scn-sidebar__menu-button',
                local.active && 'scn-sidebar__menu-button--active',
                sidebar.collapsed() && 'scn-sidebar__menu-button--collapsed',
                local.class,
            )}
            aria-current={local.active ? 'page' : undefined}
            data-tooltip={sidebar.collapsed() ? local.tooltip : undefined}
        >
            {local.children}
        </a>
    )
}