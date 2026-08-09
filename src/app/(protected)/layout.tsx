import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { onBoardUser } from "@/features/auth/actions";
import { auth } from "@clerk/nextjs/server";
import React from "react";

export async function layout({ children }: { children: React.ReactNode }) {
    await auth.protect();
    await onBoardUser();
    return (
        <div>
            <SidebarProvider>
                <AppSidebar />
                {children}
            </SidebarProvider>
        </div>
    );
}

export default layout;
