// app/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter, redirect } from "next/navigation";
import MarketingPageUI from "@/components/MarketingPageUI";

export default function RootPage() {
  // const router = useRouter();

  // useEffect(() => {
  //   router.push("/login");
  // }, [router]);

  return <MarketingPageUI />;
  // return (
  //   <div className="min-h-screen bg-app-bg flex items-center justify-center text-app-muted font-mono text-xs">
  //     Redirecting to Tradox Auth Architecture...
  //   </div>
  //   );
}