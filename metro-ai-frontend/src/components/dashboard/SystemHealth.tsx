export default function SystemHealth() {

    return (

        <div className="dashboard-panel">

            <h5 className="mb-4">

                System Health

            </h5>

            <ul className="list-group">

                <li className="list-group-item d-flex justify-content-between">

                    Metro API

                    <span className="badge bg-success">
                        Online
                    </span>

                </li>

                <li className="list-group-item d-flex justify-content-between">

                    Ticket Service

                    <span className="badge bg-success">
                        Online
                    </span>

                </li>

                <li className="list-group-item d-flex justify-content-between">

                    AI Engine

                    <span className="badge bg-warning">
                        Processing
                    </span>

                </li>

            </ul>

        </div>

    );

}