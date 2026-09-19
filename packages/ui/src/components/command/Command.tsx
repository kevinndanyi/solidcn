import type { Component, JSX } from 'solid-js'
import { splitProps } from 'solid-js'
import { cx } from '@solidcn/cx'

import './command.scss'

export interface CommandProps
  extends JSX.HTMLAttributes<HTMLDivElement> {
  class?: string
}

export const Command: Component<CommandProps> = (props) => {
  const [local, rest] = splitProps(props, ['class'])

  return (
    <div
      {...rest}
      class={cx('scn-command', local.class)}
    />
  )
}
