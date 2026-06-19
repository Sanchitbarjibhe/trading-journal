// src/app/(dashboard)/dashboard/page.tsx
import Sidebar from "@/components/Sidebar";
import TradeForm from "@/components/TradeForm";

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            {/* UI Top bar showing layout switcher */}
            <div className="flex justify-between items-center mb-4">
                <div></div>
                <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                    <span>UI</span>
                    <div className="w-8 h-4 bg-[#262626] rounded-full p-0.5 cursor-pointer flex justify-end border border-[#3f3f46]">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* फक्त मुख्य फॉर्म इथे येईल */}
            <TradeForm />
        </div>
    );
}