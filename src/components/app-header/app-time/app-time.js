import { Component } from "react";
import Clock from "react-live-clock";

class AppTime extends Component {
	render() {
		return (
			<div className="liveTime">
				<Clock format={"HH:mm:ss"} ticking={true} timezone={"Europe/Kiev"} />
			</div>
		);
	}
}

export default AppTime;
