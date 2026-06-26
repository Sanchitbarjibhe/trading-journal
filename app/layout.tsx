// app/layout.tsx
"use client";


import "@/app/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { StoreProvider } from "@/store/StoreProvider";
import { LayoutWrapper } from "@/components/LayoutWrapper";

// export const metadata = {
//   title: "SweepX | Advanced Trading Psychology Analytics",
//   description: "Stop overtrading and fix your emotional matrix. SweepX maps psychological parameters like FOMO and greed alongside market data.",
//   openGraph: {
//     title: "SweepX | Deconstruct Your Trading Psychology",
//     description: "Isolate execution anomalies, track slippage, and analyze hesitation metrics in real-time.",
//     url: "https://sweepx.vercel.app",
//     siteName: "SweepX",
//     images: [
//       {
//         url: "/og-image.png",
//         width: 1200,
//         height: 630,
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "SweepX | Advanced Trading Analytics",
//     description: "Stop overtrading. Optimize your execution edge.",
//     images: ["/og-image.png"],
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 1. Enforce suppressHydrationWarning here at html level
    <html lang="en" suppressHydrationWarning>
      {/* 2. Enforce suppressHydrationWarning at body level as well */}
      <body className="antialiased font-sans bg-white dark:bg-[#090b11]" suppressHydrationWarning>
        <StoreProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>

            {/* The global layout app wrapper architecture */}
            <LayoutWrapper>{children}</LayoutWrapper>

          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}