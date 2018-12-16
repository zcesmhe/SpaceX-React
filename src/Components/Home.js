import React from "react";
import CountdownTimer from "./CountdownTimer";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nextLaunch: "",
            latestLaunch: "",
        }
    }

    componentDidMount() {

        fetch("https://api.spacexdata.com/v3/launches/next")
            .then(response => response.json())
            .then(json => this.setState({
                nextLaunch: json
            }));

        fetch("https://api.spacexdata.com/v3/launches/latest")
            .then(response => response.json())
            .then(json => this.setState({
                latestLaunch: json
            }));
    }

    render() {
        return (
            <div className="home">
                <div className="next-launch-container">
                    <div className="next-launch-info">
                        <div>
                            <div className="mission-name">Next Mission: {this.state.nextLaunch.mission_name}</div>
                            <CountdownTimer launchDateUnix={this.state.nextLaunch.launch_date_unix} />
                            <div className="sub-heading">Date:</div>
                            <p>{new Date(this.state.nextLaunch.launch_date_unix * 1000).toString()}</p>
                            <div className="sub-heading">Launch Site:</div>
                            <p>{this.state.nextLaunch.launch_site ? this.state.nextLaunch.launch_site.site_name_long : null}</p>
                            <div className="sub-heading">Mission Details:</div>
                            <p>{this.state.nextLaunch.details}</p>
                        </div>
                    </div>
                </div>
                <div className="seperator">
                    <span className="helper"></span>
                    <div className="fire"></div>
                    <img src="https://rocketfly.netlify.com/img/rocket.svg" alt="Rocket" />
                </div>
                <div className="latest-launch-container">
                    <div className="latest-launch-info">
                        <div>
                            <div className="mission-name">Latest Mission: {this.state.latestLaunch.mission_name}</div>
                            <div className="sub-heading">Date:</div>
                            <p>{new Date(this.state.latestLaunch.launch_date_unix * 1000).toString()}</p>
                            <div className="sub-heading">Launch Site:</div>
                            <p>{this.state.latestLaunch.launch_site ? this.state.latestLaunch.launch_site.site_name_long : null}</p>
                            <div className="sub-heading">Mission Details:</div>
                            <p>{this.state.latestLaunch.details}</p>
                        </div>
                    </div>
                </div>
                <div className="seperator"></div>
                <div className="total-launches-container">
                    <div className="total-launches">
                        <div>
                            <div className="mission-name">Total Launch Count</div>
                            <div className="launch-count">
                                {this.state.latestLaunch.flight_number}
                            </div>
                            <div className="launch-count-subtitle">Flights</div>
                            <p>SpaceX has launched {this.state.latestLaunch.flight_number} rockets, carrying a variety of payloads to multiple destinations;including LEO, GTO,
                            L1, and the ISS. SpaceX currently has a manifest of over 70 flights that will fly over the coming years.</p>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Home;