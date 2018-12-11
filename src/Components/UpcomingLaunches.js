import React from "react";
import LaunchDetails from "./LaunchDetails";
import {PanelGroup} from "react-bootstrap";

class UpcomingLaunches extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            launches: []
        }
    }

    componentDidMount() {
        fetch("https://api.spacexdata.com/v3/launches/upcoming")
            .then(response => response.json())
            .then(json => this.setState({
                launches: json
            }));
    }

    render() {
        var launchDetails = this.state.launches.map((details, key) => <LaunchDetails key={key} details={details} />);
        return (
            <div className="upcoming-launches">
            <PanelGroup accordion id="accordion">
                {launchDetails}
            </PanelGroup>
            </div>
        );
    }
}

export default UpcomingLaunches;