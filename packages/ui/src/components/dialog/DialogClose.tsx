import type { Component, JSX } from 'solid-js'
import { splitProps } from 'solid-js'
import { cx } from '@solidcn/cx'

import { useDialog } from './Dialog'

import './dialog.scss'

export interface DialogCloseProps
    extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
    class?: string
}

export const DialogClose: Component<
    DialogCloseProps
> = (props) => {
    const [local, rest] = splitProps(props, [
        'class',
        'children',
    ])

    const dialog = useDialog()

    return (
        <button
            {...rest}
            type="button"
            class={cx(
                'scn-dialog__close',
                local.class,
            )}
            onClick={() => {
                dialog.setOpen(false)
            }}
        >
            {local.children}
        </button>
    )
}