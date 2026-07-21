import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

const data = [
    { day: "Mon", passengers: 120 },
    { day: "Tue", passengers: 145 },
    { day: "Wed", passengers: 180 },
    { day: "Thu", passengers: 210 },
    { day: "Fri", passengers: 260 },
    { day: "Sat", passengers: 230 },
    { day: "Sun", passengers: 190 }
];

export default function PassengerChart() {
    return (
        <div className="dashboard-panel">
            <h5>Passenger Trend</h5>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day"/>
                    <YAxis/>
                    <Tooltip/>
                    <Line
                        type="monotone"
                        dataKey="passengers"
                        stroke="#2563eb"
                        strokeWidth={3}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}