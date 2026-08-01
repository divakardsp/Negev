export default async function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-10 px-6 py-10 md:px-10 md:py-14">
                <header className="flex flex-col gap-4">
                    <p className="w-fit rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                        Color system preview
                    </p>
                    <div className="max-w-3xl space-y-3">
                        <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
                            Global palette showcase
                        </h1>
                        <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                            This page uses every main token from your global CSS
                            so you can compare the background, surface, muted,
                            border, primary, success, warning, and destructive
                            colors in one place.
                        </p>
                    </div>
                </header>

                <section className="grid gap-6 lg:grid-cols-3">
                    <article className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                        <h2 className="text-xl font-semibold">Core buttons</h2>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Different button weights and states using your theme
                            colors.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <button className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-hover">
                                Primary
                            </button>
                            <button className="rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-muted">
                                Secondary
                            </button>
                            <button className="rounded-full bg-muted px-5 py-2.5 text-sm font-semibold text-foreground transition hover:opacity-90">
                                Muted
                            </button>
                        </div>
                    </article>

                    <article className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                        <h2 className="text-xl font-semibold">
                            Status buttons
                        </h2>
                        <p className="mt-2 text-sm text-muted-foreground">
                            These use the extra semantic colors from your
                            globals.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <button className="rounded-full bg-success px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90">
                                Success
                            </button>
                            <button className="rounded-full bg-warning px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90">
                                Warning
                            </button>
                            <button className="rounded-full bg-destructive px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90">
                                Destructive
                            </button>
                        </div>
                    </article>

                    <article className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                        <h2 className="text-xl font-semibold">Palette cards</h2>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Background and border combinations to compare the
                            neutral surfaces.
                        </p>
                        <div className="mt-6 grid gap-3">
                            <div className="rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium">
                                Background card
                            </div>
                            <div className="rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium">
                                Surface card
                            </div>
                            <div className="rounded-xl border border-border bg-muted px-4 py-3 text-sm font-medium text-muted-foreground">
                                Muted card
                            </div>
                        </div>
                    </article>
                </section>

                <section className="grid gap-6 lg:grid-cols-2">
                    <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                        <h2 className="text-xl font-semibold">Color chips</h2>
                        <div className="mt-5 flex flex-wrap gap-3">
                            <span className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                                Primary
                            </span>
                            <span className="rounded-full bg-muted px-4 py-2 text-sm font-medium text-foreground">
                                Muted
                            </span>
                            <span className="rounded-full bg-surface px-4 py-2 text-sm font-medium text-foreground">
                                Surface
                            </span>
                            <span className="rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground">
                                Border
                            </span>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                        <h2 className="text-xl font-semibold">
                            System preview
                        </h2>
                        <p className="mt-2 text-sm text-muted-foreground">
                            The page inherits your light or dark mode
                            automatically from the theme provider.
                        </p>
                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                            <div className="rounded-xl bg-background px-4 py-4 text-sm">
                                <span className="block font-medium">
                                    Background
                                </span>
                                <span className="text-muted-foreground">{`var(--background)`}</span>
                            </div>
                            <div className="rounded-xl bg-surface px-4 py-4 text-sm">
                                <span className="block font-medium">
                                    Surface
                                </span>
                                <span className="text-muted-foreground">{`var(--surface)`}</span>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </main>
    );
}
