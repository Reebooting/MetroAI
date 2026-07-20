import {
  Bot,
  MapPinned,
  Route,
  Ticket,
} from "lucide-react";

import Logo from "./Logo";

const features = [
  {
    icon: <MapPinned size={22} />,
    title: "Live Metro Tracking",
    description: "Monitor every train in real time."
  },
  {
    icon: <Route size={22} />,
    title: "Smart Route Planning",
    description: "AI assisted route optimization."
  },
  {
    icon: <Bot size={22} />,
    title: "Metro AI Assistant",
    description: "Instant passenger support."
  },
  {
    icon: <Ticket size={22} />,
    title: "Digital QR Ticketing",
    description: "Fast and secure ticket management."
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

    <div className="metro-stat">

        <h2>128</h2>

        <span>Stations</span>

    </div>

    <div className="metro-stat">

        <h2>430</h2>

        <span>Active Trains</span>

    </div>

    <div className="metro-stat">

        <h2>2.3M</h2>

        <span>Daily Riders</span>

    </div>

    <div className="metro-stat">

        <h2>99.8%</h2>

        <span>On Time</span>

    </div>

</div>
      <div className="metro-line">

        {features.map((item, index) => (

          <div
            className="metro-step"
            key={item.title}
          >

            <div className="metro-icon">

              {item.icon}

            </div>

            <div className="metro-content">

              <h5>

                {item.title}

              </h5>

              <p>

                {item.description}

              </p>

            </div>

            {index !== features.length - 1 && (
              <div className="metro-track"></div>
            )}

          </div>

        ))}

      </div>

    </div>
  );
}