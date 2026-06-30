// app/blog/[slug]/page.tsx
import Navbar from "@/components/Navbar";
import Link from "next/link";

interface PageProps {
    params: {
        slug: string;
    };
}

export default function BlogPostDetail({ params }: PageProps) {
    const { slug } = params;

    return (
        <div className="min-h-screen bg-app-bg text-app-text font-sans">
            <Navbar />

            <main className="max-w-3xl mx-auto px-6 py-16">
                <Link href="/blog" className="text-xs text-app-muted hover:text-white transition font-mono">
                    ← Back to all updates
                </Link>

                <article className="mt-8 space-y-6">
                    <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white leading-tight">
                        Reading: {slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                    </h1>

                    <div className="h-[1px] w-full bg-app-border/40 my-6" />

                    {/* Core Blog Content Area */}
                    <div className="text-app-muted leading-relaxed space-y-4 text-base">
                        <p>
                            Trading execution relies heavily on structure. When institutional footprint sweeps liquidity levels, retail traders often get caught in the premium or discount zones due to emotional reactivity.
                        </p>
                        <p>
                            By defining systematic rules inside your execution logging, you remove cognitive bias and allow compounding to play its actual mathematical edge.
                        </p>
                    </div>
                </article>

                {/* Bottom persistent CTA inside the blog page to capture signups */}
                <div className="mt-16 p-8 bg-white/2 border border-white/5 rounded-2xl text-center space-y-4">
                    <h3 className="text-lg font-bold text-white">Ready to eliminate emotional execution errors?</h3>
                    <p className="text-sm text-app-muted max-w-sm mx-auto">
                        Log your setups, analyze cognitive bias, and protect your capital with Tradox infrastructure.
                    </p>
                    <div className="pt-2">
                        <Link
                            href="/auth/signup"
                            className="bg-white text-[#090b11] font-semibold text-sm px-6 py-3 rounded-xl hover:opacity-90 transition inline-block"
                        >
                            Get Started for Free
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}