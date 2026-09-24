// src/components/Sidebar/Sidebar.tsx
import { createSignal, ParentComponent, Show } from "solid-js";
import { ChevronFirst, ChevronLast } from "lucide-solid";
import { SidebarContext } from "./SidebarContext";
import styles from "./sidebar.module.scss";

const Sidebar: ParentComponent = (props) => {
    const [expanded, setExpanded] = createSignal(true);

    return (
        <aside class={styles.aside}>
            <nav class={styles.nav}>
                {/* Logo + toggle */}
                <div class={styles.header}>
                    <img
                        src="https://img.logoipsum.com/243.svg"
                        class={styles.logo}
                        classList={{ [styles.logoCollapsed!]: !expanded() }}
                        alt=""
                    />
                    <button
                        onClick={() => setExpanded((curr) => !curr)}
                        class={styles.toggleBtn}
                    >
                        <Show when={expanded()} fallback={<ChevronLast />}>
                            <ChevronFirst />
                        </Show>
                    </button>
                </div>

                {/* Menu */}
                <SidebarContext.Provider value={{ expanded }}>
                    <ul class={styles.menu}>{props.children}</ul>
                </SidebarContext.Provider>

                {/* Footer / user */}
                <div class={styles.footer}>
                    <img
                        src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
                        alt=""
                        class={styles.avatar}
                    />
                    <div
                        class={styles.userInfo}
                        classList={{ [styles.userInfoCollapsed!]: !expanded() }}
                    >
                        <div class={styles.userText}>
                            <h4>John Doe</h4>
                            <span>johndoe@gmail.com</span>
                        </div>
                        <MoreVerticalIcon />
                    </div>
                </div>
            </nav>
        </aside>
    );
};

// Small inline icon since lucide-solid names differ slightly
const MoreVerticalIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
        <circle cx="12" cy="12" r="1" />
        <circle cx="12" cy="5" r="1" />
        <circle cx="12" cy="19" r="1" />
    </svg>
);

export default Sidebar;