// components/ThemeProvider.tsx
"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
    children,
    ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
    const [mounted, setMounted] = React.useState(false);

    // Directly handle rendering strictly after hydration completes on the client side
    React.useEffect(() => {
        setMounted(true);
    }, []);

    // During SSR pre-render, bypass NextThemesProvider execution entirely to prevent script tag injection conflicts
    if (!mounted) {
        return <>{children}</>;
    }

    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}