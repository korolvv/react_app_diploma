import AppDate from "./app-date/app-date";

import logo from "../../img/user_img.jpg";
import door from "../../img/door.png";

import "./app-header.css";

const AppHeader = ({ loginName, deleteCookie }) => {
	return (
		<div className="header">
			<div className="userField">
				<div className="userName">{loginName}</div>
				<div className="userImg">
					<img src={logo} alt="user_img" />
				</div>
				<button onClick={deleteCookie} title="Вийти">
					<img src={door} alt="Logout" />
					Вийти
				</button>
			</div>
			<div className="dateField">
				<AppDate />
			</div>
		</div>
	);
};

export default AppHeader;
