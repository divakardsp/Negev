import Link from "next/link";

export default function Home() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,111,255,0.16),transparent_42%),radial-gradient(circle_at_bottom,rgba(47,111,255,0.08),transparent_34%)] dark:bg-[radial-gradient(circle_at_top,rgba(47,111,255,0.28),transparent_42%),radial-gradient(circle_at_bottom,rgba(47,111,255,0.12),transparent_34%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-size-[56px_56px] opacity-30 dark:opacity-20" />

            <div className="relative flex min-h-screen items-center justify-center px-6 py-16">
                <div className="w-full max-w-4xl rounded-[calc(var(--radius)*2)] border border-border bg-surface/80 px-8 py-16 text-center shadow-[0_24px_120px_rgba(15,23,42,0.08)] backdrop-blur md:px-16 md:py-20 dark:shadow-[0_24px_140px_rgba(0,0,0,0.45)]">
                    <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-muted-foreground">
                        NEGEV
                    </p>
                    <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                        NEGEV - AI Integration of Gmail and Outlook
                    </h1>

                    <div className="mt-10 flex justify-center">
                        <Link
                            href="/dashboard"
                            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                        >
                            Get started
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
