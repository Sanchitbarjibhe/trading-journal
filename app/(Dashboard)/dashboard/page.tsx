import { EmptyState } from "@/components/EmptyState";
import TradeForm from "@/components/TradeForm";

export default function DashboardPage() {

    const handleAddTradeLog = () => {
        alert("Opening Trade Execution Logging Ingest Form...");
    };
    return (
        <div className="space-y-6">
            {/* only main form, because top bar manage in layout */}
            <TradeForm />


            {/* Rendering our custom designed premium illustration empty state */}
            <EmptyState onAddTrade={handleAddTradeLog} />
        </div>
    );
}