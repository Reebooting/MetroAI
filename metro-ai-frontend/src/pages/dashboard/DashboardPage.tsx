import DashboardStats from "../../components/dashboard/DashboardStats";
import LiveStatus from "../../components/dashboard/LiveStatus";
import AIInsights from "../../components/dashboard/AIInsights";
import RecentTickets from "../../components/dashboard/RecentTickets";
import ActiveTrains from "../../components/dashboard/ActiveTrains";
import SystemHealth from "../../components/dashboard/SystemHealth";

export default function DashboardPage() {
    return (
        <div className="container-fluid">

            {/* Welcome Section */}
            <div className="mb-4">
                <h2 className="fw-bold">Welcome back 👋</h2>
                <p className="text-muted mb-0">
                    Here's what's happening across the Metro network today.
                </p>
            </div>

            {/* KPI Cards */}
            <DashboardStats />

            {/* Row 1 */}
            <div className="row g-4 mb-4">

                <div className="col-lg-7">
                    <LiveStatus />
                </div>

                <div className="col-lg-5">
                    <AIInsights />
                </div>

            </div>

            {/* Row 2 */}
            <div className="row g-4 mb-4">

                <div className="col-lg-7">
                    <RecentTickets />
                </div>

                <div className="col-lg-5">
                    <ActiveTrains />
                </div>

            </div>

            {/* Row 3 */}
            <div className="row">

                <div className="col-lg-12">
                    <SystemHealth />
                </div>

            </div>

        </div>
    );
}