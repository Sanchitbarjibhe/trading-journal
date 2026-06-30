// app/page.tsx
"use client";

<<<<<<< HEAD
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
=======
import { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
>>>>>>> Dev_Branch
import MarketingPageUI from "@/components/MarketingPageUI";

debugger;
export default function RootPage() {
  const router = useRouter();
<<<<<<< HEAD
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
=======
  // redirect("/login");
  useEffect(() => {
    router.push("auth/login");
  }, [router]);
  // return <MarketingPageUI />;
  return (
    <div className="min-h-screen bg-app-bg flex items-center justify-center text-app-muted font-mono text-xs">
      Redirecting to Tradox Auth Architecture...
    </div>
  );
>>>>>>> Dev_Branch
}