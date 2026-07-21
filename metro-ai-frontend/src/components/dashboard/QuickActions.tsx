import {
    PlusCircle,
    Ticket,
    TrainFront,
    MapPinned
} from "lucide-react";

export default function QuickActions() {

    return (

        <div className="dashboard-panel">

            <h5>Quick Actions</h5>

            <div className="d-grid gap-3">

                <button className="btn btn-primary">
                    <PlusCircle size={18}/> Add Station
                </button>

                <button className="btn btn-success">
                    <TrainFront size={18}/> Add Train
                </button>

                <button className="btn btn-warning">
                    <Ticket size={18}/> Book Ticket
                </button>

                <button className="btn btn-info">
                    <MapPinned size={18}/> View Route
                </button>

            </div>

        </div>

    );

}