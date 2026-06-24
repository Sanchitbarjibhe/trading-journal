// app/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter, redirect } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  // redirect("/");

  useEffect(() => {
    // Automatically redirecting the user to the login route on initial mount
    router.push("/login");
  }, [router]);

  return (
    <div className="min-h-screen bg-app-bg flex items-center justify-center text-app-muted font-mono text-xs">
      Redirecting to Tradox Auth Architecture...
    </div>
  );
}