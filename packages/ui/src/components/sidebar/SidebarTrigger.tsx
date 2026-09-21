import type { Component } from 'solid-js'
import { splitProps } from 'solid-js'
import { cx } from '@solidcn/cx'
import { useSidebar } from './context'
import type { SidebarTriggerProps } from './types'

export const SidebarTrigger: Component<SidebarTriggerProps> = (props) => {
    const [local, rest] = splitProps(props, ['class', 'children', 'disabled'])
    const sidebar = useSidebar()

    return (
        <button
            {...rest}
            type="button"
            class={cx('scn-sidebar__trigger', local.class)}
            disabled={local.disabled}
            aria-label={rest['aria-label'] ?? 'Toggle sidebar'}
            aria-expanded={!sidebar.collapsed()}
            onClick={() => {
                if (!local.disabled) {
                    sidebar.toggle()
                }
            }}
        >
            {local.children}
        </button>
    )
}