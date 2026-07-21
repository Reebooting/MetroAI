const tickets = [
    {
        id: "TKT001",
        station: "Rajiv Chowk",
        fare: "₹50",
        status: "Completed"
    },
    {
        id: "TKT002",
        station: "Noida Sector 62",
        fare: "₹40",
        status: "Completed"
    },
    {
        id: "TKT003",
        station: "Dwarka",
        fare: "₹60",
        status: "Pending"
    }
];

export default function RecentTickets() {

    return (

        <div className="dashboard-panel">

            <h5 className="mb-4">
                Recent Tickets
            </h5>

            <table className="table table-hover">

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>Station</th>

                        <th>Fare</th>

                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>

                    {tickets.map(ticket => (

                        <tr key={ticket.id}>

                            <td>{ticket.id}</td>

                            <td>{ticket.station}</td>

                            <td>{ticket.fare}</td>

                            <td>{ticket.status}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}