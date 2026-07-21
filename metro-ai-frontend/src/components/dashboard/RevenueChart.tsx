import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    Tooltip
} from "recharts";

const revenue = [
    { month: "Jan", revenue: 22 },
    { month: "Feb", revenue: 28 },
    { month: "Mar", revenue: 31 },
    { month: "Apr", revenue: 36 },
    { month: "May", revenue: 42 },
    { month: "Jun", revenue: 39 }
];

export default function RevenueChart() {
    return (
        <div className="dashboard-panel">
            <h5>Revenue</h5>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={revenue}>
                    <XAxis dataKey="month"/>
                    <Tooltip/>
                    <Bar dataKey="revenue" fill="#3b82f6"/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}