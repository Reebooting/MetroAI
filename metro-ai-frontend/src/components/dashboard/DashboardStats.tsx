import {
    Building2,
    TrainFront,
    Users,
    IndianRupee
} from "lucide-react";

const stats = [
    {
        title: "Stations",
        value: "128",
        change: "+4 this month",
        icon: <Building2 size={26} />
    },
    {
        title: "Active Trains",
        value: "430",
        change: "Running Normally",
        icon: <TrainFront size={26} />
    },
    {
        title: "Passengers",
        value: "2.3M",
        change: "+8.4%",
        icon: <Users size={26} />
    },
    {
        title: "Revenue",
        value: "₹8.4 Cr",
        change: "Today's Collection",
        icon: <IndianRupee size={26} />
    }
];

export default function DashboardStats() {
    return (
        <div className="row g-4 mb-4">
            {stats.map((card) => (
                <div className="col-lg-3 col-md-6" key={card.title}>
                    <div className="dashboard-card">
                        <div className="dashboard-icon">
                            {card.icon}
                        </div>

                        <h2>{card.value}</h2>

                        <h6>{card.title}</h6>

                        <small>{card.change}</small>
                    </div>
                </div>
            ))}
        </div>
    );
}