const alerts = [
    "⚠ Yellow Line delayed by 4 minutes",
    "🚆 Blue Line running normally",
    "🛠 Red Line maintenance at Kashmere Gate",
    "🤖 AI predicts peak traffic at 8:30 AM"
];

export default function AlertsPanel() {
    return (
        <div className="dashboard-panel">
            <h5>Latest Alerts</h5>

            <ul className="list-group">

                {alerts.map(alert => (

                    <li
                        key={alert}
                        className="list-group-item"
                    >
                        {alert}
                    </li>

                ))}

            </ul>

        </div>
    );
}