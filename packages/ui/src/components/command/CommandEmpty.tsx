import type { Component, JSX } from 'solid-js'
import { Show, splitProps } from 'solid-js'
import { cx } from '@solidcn/cx'

import { useCommand } from './Command'

import './command.scss'

export interface CommandEmptyProps
    extends JSX.HTMLAttributes<HTMLDivElement> {
    class?: string
}

export const CommandEmpty: Component<
    CommandEmptyProps
> = (props) => {
    const [local, rest] = splitProps(props, [
        'class',
        'children',
    ])

    const command = useCommand()

    return (
        <Show when={command.search()}>
            <div
                {...rest}
                class={cx(
                    'scn-command__empty',
                    local.class,
                )}
            >
                {local.children}
            </div>
        </Show>
    )
}