// src/components/Sidebar/SidebarContext.ts
import { createContext, useContext } from "solid-js";

interface SidebarContextValue {
    expanded: () => boolean;
}

export const SidebarContext = createContext<SidebarContextValue>();

export const useSidebar = () => {
    const ctx = useContext(SidebarContext);
    if (!ctx) throw new Error("useSidebar must be used inside Sidebar");
    return ctx;
};