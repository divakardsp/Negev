

export default function Home() {
    return (
        <main className="min-h-screen overflow-hidden bg-transparent text-(--foreground) transition-colors">
            <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-16">
                <div className="grid w-full gap-8 rounded-[2rem] border border-(--border) bg-(--surface) p-8 shadow-2xl shadow-zinc-900/5 backdrop-blur md:grid-cols-[1.2fr_0.8fr] md:p-12">
                    <section className="flex flex-col justify-center gap-6">
                        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-(--border) bg-(--surface-muted) px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-(--foreground)">
                            Theme provider setup
                        </div>
                        <h1 className="max-w-xl text-4xl font-semibold tracking-tight md:text-6xl">
                            A working light and dark theme toggle for your Next
                            app.
                        </h1>
                        <p className="max-w-xl text-base leading-7 text-(--foreground)/70 md:text-lg">
                            The app is now wrapped in a client ThemeProvider,
                            and this page reacts to theme changes immediately.
                        </p>
                        <div className="flex flex-wrap gap-3 text-sm font-medium text-(--foreground)/80">
                            <span className="rounded-full border border-(--border) px-4 py-2">
                                next-themes
                            </span>
                            <span className="rounded-full border border-(--border) px-4 py-2">
                                Tailwind v4
                            </span>
                            <span className="rounded-full border border-(--border) px-4 py-2">
                                App Router
                            </span>
                        </div>
                    </section>

                    <section className="flex items-center justify-center">
                        <div className="flex w-full max-w-sm flex-col items-stretch gap-6 rounded-[1.75rem] border border-(--border) bg-(--surface-muted) p-6 shadow-xl shadow-zinc-900/5">
                            
                            <div className="rounded-2xl bg-(--surface) p-4 text-sm leading-6 text-(--foreground)/75">
                                If this card changes with the buttons above, the
                                provider is wired correctly.
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
