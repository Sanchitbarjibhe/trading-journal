import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                app: {
                    bg: "var(--app-bg)",
                    card: "var(--app-card)",
                    border: "var(--app-border)",
                    text: "var(--app-text)",
                    muted: "var(--app-muted)",
                    danger: "var(--accent-danger)",
                },
            },
        },
    },
    plugins: [],
};
export default config;