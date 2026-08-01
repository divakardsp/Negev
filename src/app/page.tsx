import { auth } from "@clerk/nextjs/server";

export default async function Home() {
    
    await auth.protect();

    return (
        <>
            <div className="bg-zinc-900 min-h-screen flex justify-center items-center text-3xl font-bold">
                Welcome to NEGEV
            </div>
        </>
    );
}
