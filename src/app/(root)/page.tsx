import { auth } from "@clerk/nextjs/server";

export default async function Home() {

    
    return (
        <>
            <div className="min-h-screen flex justify-center items-center text-3xl font-bold">
                Welcome to NEGEV
            </div>
        </>
    );
}
