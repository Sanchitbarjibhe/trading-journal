// app/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import MarketingPageUI from "@/components/MarketingPageUI";

export default function RootPage() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if authentication token exists in local storage
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
      router.push("/dashboard"); // Redirect authenticated users to dashboard
    } else {
      setIsLoggedIn(false); // Render marketing page for guests
    }
  }, [router]);

  // Show loading state while checking authentication session
  if (isLoggedIn === null) {
    return (
      <div className="min-h-screen bg-[#07090e] flex items-center justify-center text-slate-400 font-mono text-xs">
        Checking Tradox Auth Session...
      </div>
    );
  }

  // Render marketing page if user is not logged in
  return <MarketingPageUI />;
}