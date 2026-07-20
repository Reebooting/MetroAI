import {
  Bot,
  MapPinned,
  Route,
  Ticket,
} from "lucide-react";

import Logo from "./Logo";

export default function LoginHero() {

  const features = [
    {
      icon: <MapPinned size={22} />,
      title: "Live Metro Tracking",
      desc: "Monitor trains in real time."
    },
    {
      icon: <Route size={22} />,
      title: "Smart Route Planning",
      desc: "AI powered route optimization."
    },
    {
      icon: <Ticket size={22} />,
      title: "QR Ticket Management",
      desc: "Secure digital ticketing."
    },
    {
      icon: <Bot size={22} />,
      title: "Metro AI Assistant",
      desc: "Intelligent passenger support."
    }
  ];

  return (

    <div className="login-hero">

      <Logo />

      <h2 className="mt-5 fw-bold">
        Welcome to the Future of Metro Management
      </h2>

      <p className="metro-subtitle mt-3 mb-5">

        Built for passengers, operators and administrators.

      </p>

      {

        features.map((item) => (

          <div
            key={item.title}
            className="feature-card"
          >

            <div className="feature-icon">

              {item.icon}

            </div>

            <div>

              <h6 className="mb-1 fw-bold">

                {item.title}

              </h6>

              <small className="text-muted">

                {item.desc}

              </small>

            </div>

          </div>

        ))

      }

    </div>

  );
}