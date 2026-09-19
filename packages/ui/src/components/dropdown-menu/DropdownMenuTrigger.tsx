import type { Component, JSX, } from 'solid-js'
import { splitProps } from 'solid-js'
import { cx } from '@solidcn/cx'

import { useDropdownMenu } from './DropdownMenu'

import './dropdown-menu.scss'

export interface DropdownMenuTriggerProps
    extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
    class?: string
}

export const DropdownMenuTrigger: Component<
    DropdownMenuTriggerProps
> = (props) => {
    const [local, rest] = splitProps(props, [
        'class',
        'children',
    ])

    const menu = useDropdownMenu()

    const toggle = () => {
        menu.setOpen(!menu.open())
    }

    const handleKeyDown = (
        event: KeyboardEvent,
    ) => {
        if (
            event.key === 'Enter' ||
            event.key === ' '
        ) {
            event.preventDefault()
            toggle()
        }

        if (event.key === 'ArrowDown') {
            event.preventDefault()
            menu.setOpen(true)
        }

        if (event.key === 'Escape') {
            menu.setOpen(false)
        }
    }

    return (
        <button
            {...rest}
            type="button"
            aria-haspopup="menu"
            aria-expanded={menu.open()}
            aria-controls={menu.contentId}
            class={cx(
                'scn-dropdown-menu__trigger',
                local.class,
            )}
            onClick={toggle}
            onKeyDown={handleKeyDown}
        >
            {local.children}
        </button>
    )
}