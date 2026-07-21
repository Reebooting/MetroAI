import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip
} from "recharts";

const data = [
    { name: "Blue", value: 35 },
    { name: "Yellow", value: 25 },
    { name: "Red", value: 15 },
    { name: "Pink", value: 25 }
];

const colors = [
    "#2563eb",
    "#facc15",
    "#ef4444",
    "#ec4899"
];

export default function MetroUsage() {

    return (
        <div className="dashboard-panel">

            <h5>Metro Line Usage</h5>

            <ResponsiveContainer width="100%" height={300}>
                <PieChart>

                    <Pie
                        data={data}
                        outerRadius={100}
                        dataKey="value"
                    >

                        {data.map((_, index) => (
                            <Cell
                                key={index}
                                fill={colors[index]}
                            />
                        ))}

                    </Pie>

                    <Tooltip/>

                </PieChart>

            </ResponsiveContainer>

        </div>
    );

}