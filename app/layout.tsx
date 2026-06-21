// // src/app/layout.tsx
// import type { Metadata } from "next";
// import { Geist } from "next/font/google";
// import "./globals.css";
// import { ThemeProvider } from "@/components/ThemeProvider";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Trading Journal",
//   description: "Track your trades and psychology",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={`${geistSans.variable} antialiased`}>
//         <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} >
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }


// // app/layout.tsx
// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     // 👇 इथे suppressHydrationWarning नक्की टाक!
//     <html lang="en" suppressHydrationWarning>
//       <body>
//         <ThemeProvider attribute="class" defaultTheme="dark">
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }


// app/layout.tsx
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

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
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}