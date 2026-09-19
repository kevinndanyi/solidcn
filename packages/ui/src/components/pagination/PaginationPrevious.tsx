import type { Component, JSX } from 'solid-js'
import { splitProps } from 'solid-js'
import { cx } from '@solidcn/cx'

import './pagination.scss'

export interface PaginationPreviousProps
    extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
    class?: string
}

export const PaginationPrevious: Component<
    PaginationPreviousProps
> = (props) => {
    const [local, rest] = splitProps(props, [
        'class',
        'children',
    ])

    return (
        <button
            {...rest}
            type="button"
            aria-label="Go to previous page"
            class={cx(
                'scn-pagination__previous',
                local.class,
            )}
        >
            <span
                aria-hidden="true"
                class="scn-pagination__arrow"
            >
                ‹
            </span>

            <span>
                {local.children ?? 'Previous'}
            </span>
        </button>
    )
}