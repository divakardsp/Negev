"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import { db } from "@/db/index";
import { users } from "@/db/schema";

export async function onBoardUser() {
    const { userId } = await auth.protect();
    if (!userId) return;

    const clerkUser = await currentUser();

    if (!clerkUser) return;

    const email =
        clerkUser.primaryEmailAddress?.emailAddress ??
        clerkUser.emailAddresses[0]?.emailAddress ??
        null;

    if(!email || !clerkUser.firstName || !clerkUser.lastName ) return 

    const name =
        clerkUser.fullName ??
        ([clerkUser.firstName, clerkUser.lastName].filter(Boolean).join(" ") ||
            null);

    await db
        .insert(users)
        .values({
            clerkId: userId,
            email,
            firstName: clerkUser.firstName,
            lastName: clerkUser.lastName,
        })
        .onConflictDoUpdate({
            target: users.clerkId,
            set: {
                email,
                firstName: clerkUser.firstName!,
                lastName: clerkUser.lastName!,
            },
        });
}
