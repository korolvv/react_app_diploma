import { Component } from "react";
import { createBrowserHistory } from "history";

import "./login.css";

const customHistory = createBrowserHistory();

class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			valueLog: "",
			valuePass: "",
			loginData: {
				login: "Петренко Алла",
				password: "qwerty123",
			},
		};
	}

	render() {
		this.formChangeLogin = (event) => {
			this.setState({ valueLog: event.target.value });
			return this.state.valueLog;
		};

		this.formChangePassword = (event) => {
			this.setState({ valuePass: event.target.value });
			return this.state.valuePass;
		};

		this.formSubmit = () => {
			if (
				this.state.valueLog === this.state.loginData.login &&
				this.state.valuePass === this.state.loginData.password
			) {
				const cookieName = "token";
				var cookieValue = "user logged";
				const daysToExpire = new Date(2147483647 * 1000).toUTCString();
				document.cookie =
					cookieName +
					"=" +
					cookieValue +
					";samesite=strict; expires=" +
					daysToExpire;
				customHistory.push("/home");
			} else {
				alert(
					"Неправильний логін чи пароль. Спробуйте ще раз або зверніться до тех. обслуговування"
				);
			}
		};

		return (
			<div className="wrapper">
				<h2 className="loginTitle">Введіть дані</h2>
				<form onSubmit={this.formSubmit}>
					<input
						className="loginInput"
						type="text"
						autoComplete="username"
						placeholder="Прізвище та імʼя"
						onChange={this.formChangeLogin}
						value={this.state.valueLog}
					/>
					<input
						className="loginInput"
						type="password"
						autoComplete="current-password"
						placeholder="Пароль"
						onChange={this.formChangePassword}
						value={this.state.valuePass}
					/>
					<button className="loginButton" type="submit">
						ВХІД
					</button>
				</form>
			</div>
		);
	}
}
// function Home() {
// 	return <App />;
// }

export default LoginPage;
