const lines = [
    {
        name: "Blue Line",
        status: "Running",
        badge: "success"
    },
    {
        name: "Yellow Line",
        status: "Delayed 4 min",
        badge: "warning"
    },
    {
        name: "Red Line",
        status: "Maintenance",
        badge: "danger"
    },
    {
        name: "Pink Line",
        status: "Running",
        badge: "success"
    }
];

export default function LiveStatus() {
    return (
        <div className="dashboard-panel">

            <h5 className="mb-4">
                Live Metro Status
            </h5>

            {lines.map((line) => (

                <div
                    key={line.name}
                    className="d-flex justify-content-between align-items-center mb-3"
                >

                    <span>{line.name}</span>

                    <span className={`badge bg-${line.badge}`}>
                        {line.status}
                    </span>

                </div>

            ))}

        </div>
    );
}