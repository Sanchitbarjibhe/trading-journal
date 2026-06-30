// app/blog/page.tsx
import Link from "next/link";
import Navbar from "@/components/Navbar";

// Dummy data for initial structure
const blogPosts = [
    {
        slug: "mastering-trading-psychology",
        title: "Emotions vs Rules: Mastering the Psychological Footprint",
        description: "Eliminate cognitive bias, audit execution inconsistencies, and systematically protect your capital.",
        date: "June 25, 2026",
    },
    {
        slug: "piramal-pharma-swing-setup",
        title: "Institutional Accumulation Study: Piramal Pharma Limited",
        description: "Deep dive into institutional footprints, liquidity sweeps, and price action mechanics for swing opportunities.",
        date: "June 20, 2026",
    }
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-app-bg text-app-text font-sans">
            <Navbar />

            <main className="max-w-4xl mx-auto px-6 py-16">
                <div className="space-y-4 mb-12 text-center md:text-left">
                    <h1 className="text-4xl font-black tracking-tight text-white">
                        Tradox Insights & Research
                    </h1>
                    <p className="text-app-muted max-w-xl">
                        Exclusive insights on institutional setups, price action mechanics, and trading psychology.
                    </p>
                </div>

                {/* Blog Post Grid/List */}
                <div className="grid gap-6">
                    {blogPosts.map((post) => (
                        <div
                            key={post.slug}
                            className="p-6 bg-app-card border border-app-border/40 rounded-2xl hover:border-white/10 transition group"
                        >
                            <span className="text-xs text-app-muted font-mono">{post.date}</span>
                            <h2 className="text-xl font-bold text-white mt-2 group-hover:text-indigo-400 transition">
                                {post.title}
                            </h2>
                            <p className="text-sm text-app-muted mt-2 leading-relaxed">
                                {post.description}
                            </p>
                            <div className="mt-4">
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="text-sm text-white font-medium underline underline-offset-4 hover:text-indigo-400 transition"
                                >
                                    Read Full Post →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}