// app/layout.tsx
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { StoreProvider } from "@/store/StoreProvider"; // 👈 Imported Redux Provider

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tradox",
  description: "Track your trades and psychology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Added suppressHydrationWarning here to handle theme injection scripts flawlessly */}
      <body className={`${geistSans.variable} antialiased`} suppressHydrationWarning>
        {/* Wrap everything inside StoreProvider so that all client components get access to Redux context */}
        <StoreProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            {children}
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}