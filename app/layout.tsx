// app/layout.tsx
import "@/app/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { StoreProvider } from "@/store/StoreProvider";
import { LayoutWrapper } from "@/components/LayoutWrapper";

export const metadata = {
  title: "Tradox - Premium Trading Journal",
  description: "Audit execution and master trading psychology",
};

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