import React from "react";
import LaunchDetails from "./LaunchDetails";
import { PanelGroup } from "react-bootstrap";

class LaunchHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            launches: []
        }
    }

    componentDidMount() {
        fetch("https://api.spacexdata.com/v3/launches/past")
            .then(response => response.json())
            .then(json => this.setState({
                launches: json
            }));
    }

    render() {
        var launchDetails = this.state.launches.map((details, key) => <LaunchDetails key={key} details={details} />).reverse();
        return (
            <div className="launch-history">
                <div className="legend">
                    <div><div className="success-color"></div> = Success</div>
                    <div><div className="fail-color"></div> = Fail</div>
                </div>
                <PanelGroup accordion id="accordion">
                    {launchDetails}
                </PanelGroup>
            </div>
        );
    }
}

export default LaunchHistory;