// app/page.tsx
"use client";

import { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import MarketingPageUI from "@/components/MarketingPageUI";

debugger;
export default function RootPage() {
  const router = useRouter();
  // redirect("/login");
  useEffect(() => {
    debugger;
    router.push("auth/login");
  }, [router]);
  // return <MarketingPageUI />;
  return (
    <div className="min-h-screen bg-app-bg flex items-center justify-center text-app-muted font-mono text-xs">
      Redirecting to Tradox Auth Architecture...
    </div>
  );
}