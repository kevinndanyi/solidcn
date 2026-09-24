// src/components/Sidebar/SidebarItem.tsx
import { JSX, Show } from "solid-js";
import { useSidebar } from "./SidebarContext";
import styles from "./sidebar.module.scss";

interface SidebarItemProps {
    icon: JSX.Element;
    text: string;
    active?: boolean;
    alert?: boolean;
}

export function SidebarItem(props: SidebarItemProps) {
    const { expanded } = useSidebar();

    return (
        <li
            class={styles.item}
            classList={{
                [styles.itemActive!]: !!props.active,
                [styles.itemInactive!]: !props.active,
            }}
        >
            {props.icon}

            <span
                class={styles.itemText}
                classList={{ [styles.itemTextCollapsed!]: !expanded() }}
            >
                {props.text}
            </span>

            <Show when={props.alert}>
                <div
                    class={styles.alert}
                    classList={{ [styles.alertCollapsed!]: !expanded() }}
                />
            </Show>

            <Show when={!expanded()}>
                <div class={styles.tooltip}>{props.text}</div>
            </Show>
        </li>
    );
}