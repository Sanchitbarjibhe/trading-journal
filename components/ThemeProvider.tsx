// components/ThemeProvider.tsx
"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
    children,
    ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
    const [mounted, setMounted] = React.useState(false);

    // Ensuring the component is fully mounted on the client to avoid server-side script tag injection anomalies
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="opacity-0 bg-app-bg min-h-screen">{children}</div>;
    }

    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}