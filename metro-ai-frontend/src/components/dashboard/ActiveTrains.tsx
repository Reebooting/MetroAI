const trains = [
    {
        train: "Blue-201",
        station: "Rajiv Chowk",
        speed: "68 km/h"
    },
    {
        train: "Yellow-122",
        station: "Kashmere Gate",
        speed: "52 km/h"
    },
    {
        train: "Red-301",
        station: "Dilshad Garden",
        speed: "60 km/h"
    }
];

export default function ActiveTrains() {

    return (

        <div className="dashboard-panel">

            <h5 className="mb-4">

                Active Trains

            </h5>

            <table className="table table-hover">

                <thead>

                    <tr>

                        <th>Train</th>

                        <th>Current Station</th>

                        <th>Speed</th>

                    </tr>

                </thead>

                <tbody>

                    {trains.map(train => (

                        <tr key={train.train}>

                            <td>{train.train}</td>

                            <td>{train.station}</td>

                            <td>{train.speed}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}