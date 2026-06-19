import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex bg-[#0a0a0a] min-h-screen text-white w-full">
            {/* डाव्या बाजूचा Sidebar */}
            <div className="w-64 fixed h-full z-20">
                <Sidebar />
            </div>

            {/* उजव्या बाजूचा मुख्य एरिया */}
            <main className="flex-1 pl-64 min-h-screen bg-[#0a0a0a]">
                <div className="p-8 max-w-[1400px] mx-auto min-h-screen bg-[#0d0d0f] border-l border-[#1a1a1c]">
                    {children}
                </div>
            </main>
        </div>
    );
}