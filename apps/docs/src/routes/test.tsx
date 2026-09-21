import type { Component } from 'solid-js'
import { Show } from 'solid-js'

import {
    Button,
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarSeparator,
    SidebarTrigger,
    useSidebar,
} from '@solidcn/ui'

import {
    ChartNoAxesColumn,
    House,
    Settings,
    Users,
} from 'lucide-solid'

const SidebarHeaderBrand: Component = () => {
    const sidebar = useSidebar()

    return (
        <div
            style={{
                display: 'flex',
                'align-items': 'center',
                'justify-content': 'space-between',
                width: '100%',
                gap: '0.5rem',
            }}
        >
            <Show when={!sidebar.collapsed()}>
                <strong style={{ 'white-space': 'nowrap' }}>
                    SolidCN
                </strong>
            </Show>

            <SidebarTrigger
                style={{
                    'margin-left': sidebar.collapsed() ? 'auto' : '0',
                }}
            >
                {sidebar.collapsed() ? '→' : '←'}
            </SidebarTrigger>
        </div>
    )
}

const MainContentArea: Component = () => {
    const sidebar = useSidebar()

    return (
        <section
            style={{
                flex: '1',
                'min-width': '0', // Prevents flex child from overflowing when sidebar toggles
                padding: '2rem',
                overflow: 'auto',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    'align-items': 'center',
                    'justify-content': 'space-between',
                    gap: '1rem',
                }}
            >
                <div>
                    <h2
                        style={{
                            margin: '0',
                            'font-size': 'var(--scn-text-xl)',
                        }}
                    >
                        Sidebar
                    </h2>

                    <p
                        style={{
                            margin: '0.5rem 0 0',
                            color: 'var(--scn-muted-foreground)',
                        }}
                    >
                        Sidebar component test page.
                    </p>
                </div>

                <Button onClick={() => sidebar.toggle()}>
                    Toggle Sidebar
                </Button>
            </div>

            <div
                style={{
                    margin: '2rem 0 0',
                    padding: '1.5rem',
                    background: 'var(--scn-muted)',
                    border: '1px solid var(--scn-border)',
                    'border-radius': 'var(--scn-radius-md)',
                }}
            >
                <strong>Keyboard shortcut</strong>

                <p
                    style={{
                        margin: '0.5rem 0 0',
                        color: 'var(--scn-muted-foreground)',
                    }}
                >
                    Press Ctrl+B on Windows/Linux or Cmd+B on macOS to toggle the sidebar.
                </p>
            </div>

            <div
                style={{
                    margin: '1rem 0 0',
                    padding: '1.5rem',
                    background: 'var(--scn-muted)',
                    border: '1px solid var(--scn-border)',
                    'border-radius': 'var(--scn-radius-md)',
                }}
            >
                <strong>Current state</strong>

                <p
                    style={{
                        margin: '0.5rem 0 0',
                        color: 'var(--scn-muted-foreground)',
                    }}
                >
                    {sidebar.mobile()
                        ? 'Mobile'
                        : sidebar.collapsed()
                            ? 'Collapsed'
                            : 'Expanded'}
                </p>
            </div>
        </section>
    )
}

function SidebarDemo() {
    return (
        <SidebarProvider>
            <div
                style={{
                    display: 'flex',
                    height: '36rem',
                    width: '100%',
                    overflow: 'hidden',
                    border: '1px solid var(--scn-border)',
                    'border-radius': 'var(--scn-radius-lg)',
                    background: 'var(--scn-background)',
                }}
            >
                <Sidebar>
                    <SidebarHeader>
                        <SidebarHeaderBrand />
                    </SidebarHeader>

                    <SidebarSeparator />

                    <SidebarContent>
                        <SidebarGroup>
                            <SidebarGroupLabel>Platform</SidebarGroupLabel>

                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton href="#" active tooltip="Dashboard">
                                            <House size={18} aria-hidden="true" />
                                            <span>Dashboard</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>

                                    <SidebarMenuItem>
                                        <SidebarMenuButton href="#" tooltip="Analytics">
                                            <ChartNoAxesColumn size={18} aria-hidden="true" />
                                            <span>Analytics</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>

                                    <SidebarMenuItem>
                                        <SidebarMenuButton href="#" tooltip="Users">
                                            <Users size={18} aria-hidden="true" />
                                            <span>Users</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>

                        <SidebarGroup>
                            <SidebarGroupLabel>Management</SidebarGroupLabel>

                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton href="#" tooltip="Settings">
                                            <Settings size={18} aria-hidden="true" />
                                            <span>Settings</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>

                    <SidebarFooter>
                        <SidebarSeparator />

                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton href="#" tooltip="Profile">
                                    <Users size={18} aria-hidden="true" />
                                    <span>Kevin</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarFooter>
                </Sidebar>

                <MainContentArea />
            </div>
        </SidebarProvider>
    )
}

export default function TestPage() {
    return (
        <main
            style={{
                padding: '2rem',
                'max-width': '72rem',
                margin: '0 auto',
            }}
        >
            <SidebarDemo />
        </main>
    )
}