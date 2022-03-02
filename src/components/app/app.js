/* eslint-disable no-useless-escape */
import { Component } from "react";

import { createBrowserHistory } from "history";

import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import LoginPage from "../app-login/login";
import AppHeader from "../app-header/app-header";
import data from "../data/data.json";

const newData = data.map((item) => {
	return item;
});

const customHistoryLogin = createBrowserHistory();

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newData,
			term: "",
			filter: "all",
			loginName: "Петренко Алла",
		};
		this.maxId = 5;
	}

	addItem = (
		name,
		position,
		salary,
		fullName,
		infoProf,
		tel,
		mail,
		address
	) => {
		const newItem = {
			name,
			position,
			salary,
			fullName,
			infoProf,
			tel,
			mail,
			address,
			increase: false,
			rise: false,
			info: false,
			hospital: false,
			vacation: false,
			id: this.maxId++,
		};
		this.setState(({ newData }) => {
			const newArr = [...newData, newItem];
			return {
				newData: newArr,
			};
		});
	};

	deleteItem = (id) => {
		if (
			window.confirm("Ви впевнені, що хочете видалити робітника та його дані?")
		) {
			this.setState(({ newData }) => {
				return {
					newData: newData.filter((item) => item.id !== id),
				};
			});
			console.log("Успішно видалено!");
		} else {
			console.log("Видалення не виконалося.");
		}
	};

	onToggleProp = (id, prop) => {
		this.setState(({ newData }) => ({
			newData: newData.map((item) => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] };
				}
				return item;
			}),
		}));
	};

	searchEmp = (items, term) => {
		if (term.length === 0) {
			return items;
		}

		return items.filter((item) => {
			return item.name.indexOf(term) > -1;
		});
	};

	onUpdateSearch = (term) => {
		this.setState({ term });
	};

	filterPost = (items, filter) => {
		switch (filter) {
			case "rise":
				return items.filter((item) => item.rise);
			case "moreThen20000":
				return items.filter((item) => item.salary >= 20000);
			default:
				return items;
		}
	};

	onFilterSelect = (filter) => {
		this.setState({ filter });
	};

	render() {
		let cookieName = "token";
		// var cookieValue = "";
		let token = "";
		// const daysToExpire = new Date(2147483647 * 1000).toUTCString();
		!getCookie(cookieName)
			? (token = getCookie(cookieName))
			: (token = getCookie(cookieName));
		if (!token) {
			return <LoginPage />;
		}

		function deleteCookie() {
			document.cookie = "token='';samesite=strict; expires='0'; max-age=0";
			customHistoryLogin.push("/login");
			return window.location.reload();
		}

		const { newData, term, filter } = this.state;
		const employees = this.state.newData.length;
		const increased = this.state.newData.filter((item) => item.increase).length;
		const visibleData = this.filterPost(this.searchEmp(newData, term), filter);

		return (
			<div className="app">
				<AppHeader
					loginName={this.state.loginName}
					deleteCookie={deleteCookie}
				/>

				<div className="appWrapper">
					<AppInfo employees={employees} increased={increased} />

					<div className="search-panel">
						<SearchPanel onUpdateSearch={this.onUpdateSearch} />
						<AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
					</div>

					<EmployeesList
						newData={visibleData}
						onDelete={this.deleteItem}
						onToggleProp={this.onToggleProp}
					/>
					<EmployeesAddForm onAdd={this.addItem} />
				</div>
			</div>
		);
	}
}

function getCookie(name) {
	let matches = document.cookie.match(
		new RegExp(
			"(?:^|; )" +
				name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
				"=([^;]*)"
		)
	);
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

export default App;
