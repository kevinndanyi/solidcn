import type { Component, JSX } from 'solid-js'
import { splitProps } from 'solid-js'
import { cx } from '@solidcn/cx'

import './pagination.scss'

export interface PaginationNextProps
    extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
    class?: string
}

export const PaginationNext: Component<
    PaginationNextProps
> = (props) => {
    const [local, rest] = splitProps(props, [
        'class',
        'children',
    ])

    return (
        <button
            {...rest}
            type="button"
            aria-label="Go to next page"
            class={cx(
                'scn-pagination__next',
                local.class,
            )}
        >
            <span>
                {local.children ?? 'Next'}
            </span>

            <span
                aria-hidden="true"
                class="scn-pagination__arrow"
            >
                ›
            </span>
        </button>
    )
}