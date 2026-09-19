import type { Component, JSX } from 'solid-js'
import { splitProps } from 'solid-js'
import { cx } from '@solidcn/cx'

import './pagination.scss'

export interface PaginationEllipsisProps
    extends JSX.HTMLAttributes<HTMLSpanElement> {
    class?: string
}

export const PaginationEllipsis: Component<
    PaginationEllipsisProps
> = (props) => {
    const [local, rest] = splitProps(props, [
        'class',
        'children',
    ])

    return (
        <span
            {...rest}
            aria-hidden="true"
            class={cx(
                'scn-pagination__ellipsis',
                local.class,
            )}
        >
            {local.children ?? '…'}
        </span>
    )
}