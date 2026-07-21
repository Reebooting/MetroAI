import {
  Bot,
  MapPinned,
  Route,
  Ticket,
  TrainFront,
  Building2,
  Users,
  Timer,
} from "lucide-react";

import Logo from "./Logo";

const stats = [
  {
    icon: <Building2 size={26} />,
    value: "128",
    label: "Stations"
  },
  {
    icon: <TrainFront size={26} />,
    value: "430",
    label: "Active Trains"
  },
  {
    icon: <Users size={26} />,
    value: "2.3M",
    label: "Daily Riders"
  },
  {
    icon: <Timer size={26} />,
    value: "99.8%",
    label: "On Time"
  }
];
const features = [
  {
    icon: <MapPinned size={24} />,
    title: "Live Tracking",
    description: "Monitor every train in real time."
  },
  {
    icon: <Route size={24} />,
    title: "Smart Routing",
    description: "AI assisted route planning."
  },
  {
    icon: <Ticket size={24} />,
    title: "QR Tickets",
    description: "Secure digital ticketing."
  },
  {
    icon: <Bot size={24} />,
    title: "Metro AI",
    description: "Instant passenger support."
  }
];


export default function LoginHero() {
  return (
    <div>

      <Logo />

      <h1 className="metro-heading mt-5">
        Manage Your Entire Metro Network
      </h1>

      <p className="metro-description mb-5">

        One platform for passengers,
        operators and administrators.

      </p>
<div className="metro-stats">

    {stats.map((stat) => (

        <div
            className="metro-stat"
            key={stat.label}
        >

            <div className="stat-icon">

                {stat.icon}

            </div>

            <h2>{stat.value}</h2>

            <span>{stat.label}</span>

        </div>

    ))}

</div>
      
<div className="feature-grid">

    {features.map((feature) => (

        <div
            key={feature.title}
            className="feature-card"
        >

            <div className="feature-icon">

                {feature.icon}

            </div>

            <div>

                <h5>{feature.title}</h5>

                <p>{feature.description}</p>

            </div>

        </div>

    ))}

</div>
    </div>
  );
}