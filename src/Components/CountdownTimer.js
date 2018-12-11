import React from "react";

class CountDownTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            days: "",
            hours: "",
            minutes: "",
            seconds: ""
        }

        this.getRemainingTime = this.getRemainingTime.bind(this);
    }

    getRemainingTime() {
        var currentDate = Math.floor(Date.now() / 1000);
        var timeDifferenceSec = Math.floor(this.props.launchDateUnix - currentDate);

        var seconds = timeDifferenceSec % 60;
        var timeDifferenceMin = (timeDifferenceSec - seconds) / 60;
        var minutes = timeDifferenceMin % 60;
        var timeDifferenceHour = (timeDifferenceMin - minutes) / 60;
        var hours = timeDifferenceHour % 24;
        var days = (timeDifferenceHour - hours) / 24;

        this.setState({
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        });
    }

    componentDidMount() {
        this.interval = setInterval(this.getRemainingTime, 1000);
    }

    render() {
        return (
            <div className="countdown-timer">
                <div className="row">
                    <div className="col-xs-3">
                        <div className="time-stat-value">{this.state.days}</div>
                        <div className="time-stat-subtitle">Days</div>
                    </div>
                    <div className="col-xs-3">
                        <div className="time-stat-value">{this.state.hours}</div>
                        <div className="time-stat-subtitle">Hours</div>
                    </div>
                    <div className="col-xs-3">
                        <div className="time-stat-value">{this.state.minutes}</div>
                        <div className="time-stat-subtitle">Minutes</div>
                    </div>
                    <div className="col-xs-3">
                        <div className="time-stat-value">{this.state.seconds}</div>
                        <div className="time-stat-subtitle">Seconds</div>
                    </div>
                </div>
            </div>
        );
    }


}

export default CountDownTimer;