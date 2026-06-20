import TradeForm from "@/components/TradeForm";

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            {/* only main form, because top bar manage in layout */}
            <TradeForm />
        </div>
    );
}