import type { Component, JSX } from 'solid-js'
import {
  createContext,
  createSignal,
  onCleanup,
  onMount,
  Show,
  splitProps,
  useContext,
} from 'solid-js'
import { cx } from '@solidcn/cx'

import './sidebar.scss'

export interface SidebarContextValue {
  collapsed: () => boolean
  toggle: () => void
  setCollapsed: (value: boolean) => void
}

const SidebarContext = createContext<SidebarContextValue>()

export function useSidebar() {
  const context = useContext(SidebarContext)

  if (!context) {
    throw new Error(
      'Sidebar components must be used inside <SidebarProvider> or <Sidebar>.',
    )
  }

  return context
}

/* -------------------------------------------------------------------------- */
/* Provider                                                                   */
/* -------------------------------------------------------------------------- */

export interface SidebarProviderProps {
  children?: JSX.Element
  collapsed?: boolean
  defaultCollapsed?: boolean
  onCollapsedChange?: (collapsed: boolean) => void
  collapsible?: boolean
}

export const SidebarProvider: Component<SidebarProviderProps> = (props) => {
  const [internalCollapsed, setInternalCollapsed] = createSignal(
    props.defaultCollapsed ?? false,
  )

  const isCollapsed = () =>
    props.collapsed !== undefined ? props.collapsed : internalCollapsed()

  const setCollapsed = (value: boolean) => {
    if (props.collapsed === undefined) {
      setInternalCollapsed(value)
    }
    props.onCollapsedChange?.(value)
  }

  const toggle = () => {
    if (props.collapsible === false) {
      return
    }
    setCollapsed(!isCollapsed())
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (
      (event.ctrlKey || event.metaKey) &&
      event.key.toLowerCase() === 'b'
    ) {
      event.preventDefault()
      toggle()
    }
  }

  onMount(() => {
    document.addEventListener('keydown', handleKeyDown)

    onCleanup(() => {
      document.removeEventListener('keydown', handleKeyDown)
    })
  })

  const context: SidebarContextValue = {
    collapsed: isCollapsed,
    toggle,
    setCollapsed,
  }

  return (
    <SidebarContext.Provider value={context}>
      {props.children}
    </SidebarContext.Provider>
  )
}

/* -------------------------------------------------------------------------- */
/* Sidebar Container                                                          */
/* -------------------------------------------------------------------------- */

export interface SidebarProps extends JSX.HTMLAttributes<HTMLElement> {
  class?: string
  collapsed?: boolean
  defaultCollapsed?: boolean
  onCollapsedChange?: (collapsed: boolean) => void
  collapsible?: boolean
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

/* -------------------------------------------------------------------------- */
/* Trigger                                                                    */
/* -------------------------------------------------------------------------- */

export interface SidebarTriggerProps
  extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  class?: string
}

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

/* -------------------------------------------------------------------------- */
/* Header                                                                     */
/* -------------------------------------------------------------------------- */

export interface SidebarHeaderProps extends JSX.HTMLAttributes<HTMLDivElement> {
  class?: string
}

export const SidebarHeader: Component<SidebarHeaderProps> = (props) => {
  const [local, rest] = splitProps(props, ['class', 'children'])

  return (
    <div {...rest} class={cx('scn-sidebar__header', local.class)}>
      {local.children}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Content                                                                    */
/* -------------------------------------------------------------------------- */

export interface SidebarContentProps extends JSX.HTMLAttributes<HTMLDivElement> {
  class?: string
}

export const SidebarContent: Component<SidebarContentProps> = (props) => {
  const [local, rest] = splitProps(props, ['class', 'children'])

  return (
    <div {...rest} class={cx('scn-sidebar__content', local.class)}>
      {local.children}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Footer                                                                     */
/* -------------------------------------------------------------------------- */

export interface SidebarFooterProps extends JSX.HTMLAttributes<HTMLDivElement> {
  class?: string
}

export const SidebarFooter: Component<SidebarFooterProps> = (props) => {
  const [local, rest] = splitProps(props, ['class', 'children'])

  return (
    <div {...rest} class={cx('scn-sidebar__footer', local.class)}>
      {local.children}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Group                                                                      */
/* -------------------------------------------------------------------------- */

export interface SidebarGroupProps extends JSX.HTMLAttributes<HTMLDivElement> {
  class?: string
}

export const SidebarGroup: Component<SidebarGroupProps> = (props) => {
  const [local, rest] = splitProps(props, ['class', 'children'])

  return (
    <div {...rest} class={cx('scn-sidebar__group', local.class)}>
      {local.children}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Group Label                                                                */
/* -------------------------------------------------------------------------- */

export interface SidebarGroupLabelProps
  extends JSX.HTMLAttributes<HTMLDivElement> {
  class?: string
}

export const SidebarGroupLabel: Component<SidebarGroupLabelProps> = (
  props,
) => {
  const [local, rest] = splitProps(props, ['class', 'children'])
  const sidebar = useSidebar()

  return (
    <Show when={!sidebar.collapsed()}>
      <div {...rest} class={cx('scn-sidebar__group-label', local.class)}>
        {local.children}
      </div>
    </Show>
  )
}

/* -------------------------------------------------------------------------- */
/* Group Content                                                              */
/* -------------------------------------------------------------------------- */

export interface SidebarGroupContentProps
  extends JSX.HTMLAttributes<HTMLDivElement> {
  class?: string
}

export const SidebarGroupContent: Component<SidebarGroupContentProps> = (
  props,
) => {
  const [local, rest] = splitProps(props, ['class', 'children'])

  return (
    <div {...rest} class={cx('scn-sidebar__group-content', local.class)}>
      {local.children}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Menu                                                                       */
/* -------------------------------------------------------------------------- */

export interface SidebarMenuProps
  extends JSX.HTMLAttributes<HTMLUListElement> {
  class?: string
}

export const SidebarMenu: Component<SidebarMenuProps> = (props) => {
  const [local, rest] = splitProps(props, ['class', 'children'])

  return (
    <ul {...rest} class={cx('scn-sidebar__menu', local.class)}>
      {local.children}
    </ul>
  )
}

/* -------------------------------------------------------------------------- */
/* Menu Item                                                                  */
/* -------------------------------------------------------------------------- */

export interface SidebarMenuItemProps
  extends JSX.LiHTMLAttributes<HTMLLIElement> {
  class?: string
}

export const SidebarMenuItem: Component<SidebarMenuItemProps> = (props) => {
  const [local, rest] = splitProps(props, ['class', 'children'])

  return (
    <li {...rest} class={cx('scn-sidebar__menu-item', local.class)}>
      {local.children}
    </li>
  )
}

/* -------------------------------------------------------------------------- */
/* Menu Button                                                                */
/* -------------------------------------------------------------------------- */

export interface SidebarMenuButtonProps
  extends JSX.AnchorHTMLAttributes<HTMLAnchorElement> {
  class?: string
  active?: boolean
  tooltip?: string
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

/* -------------------------------------------------------------------------- */
/* Separator                                                                  */
/* -------------------------------------------------------------------------- */

export interface SidebarSeparatorProps
  extends JSX.HTMLAttributes<HTMLHRElement> {
  class?: string
}

export const SidebarSeparator: Component<SidebarSeparatorProps> = (props) => {
  const [local, rest] = splitProps(props, ['class'])

  return (
    <hr {...rest} class={cx('scn-sidebar__separator', local.class)} />
  )
}