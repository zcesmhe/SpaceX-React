import React from "react";
import { Panel } from "react-bootstrap";

class LaunchDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            flightNum: this.props.details.flight_number,
            missionName: this.props.details.mission_name,
            launchDateUnix: this.props.details.launch_date_unix,
            rocketName: this.props.details.rocket.rocket_name,
            rocketType: this.props.details.rocket.rocket_type,
            launchSite: this.props.details.launch_site.site_name_long,
            launchSuccess: this.props.details.launch_success,
            missionDetails: this.props.details.details
        }
    }

    render() {

        var style;

        this.state.launchSuccess === true ? style = { color: "lawngreen" } : this.state.launchSuccess === false ? style = { color: "red" } : style = {color: "white"}

        return (
            <div className="launch-details">
                <Panel eventKey={this.state.flightNum} style={{background: "black", color: "white", opacity:"0.7", borderRadius:"1rem"}}>
                    <Panel.Heading style={{background: "black", padding: "10px", color: "white", opacity: "0.7", borderRadius:"1rem"}} >
                        <Panel.Title style={style} toggle>Mission: {this.state.missionName}</Panel.Title>
                        {new Date(this.state.launchDateUnix * 1000).toString()}
                    </Panel.Heading>
                    <Panel.Body collapsible>
                        <p><b>Flight Number:</b> {this.state.flightNum}</p>
                        <p><b>Rocket Name:</b> {this.state.rocketName}</p>
                        <p><b>Rocket Type:</b> {this.state.rocketType}</p>
                        <p><b>Launch Site:</b> {this.state.launchSite}</p>
                        <p><b>Mission Details:</b> {this.state.missionDetails}</p>
                    </Panel.Body>
                </Panel>
            </div>

        )
    }
}

export default LaunchDetails;