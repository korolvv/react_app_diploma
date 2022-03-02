import { Component } from "react";

import "./employees-add-form.css";

class EmployeesAddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			position: "",
			salary: "",
			fullName: "",
			infoProf: "",
			tel: "",
			mail: "",
			address: "",
		};
	}

	onValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.onAdd(
			this.state.name,
			this.state.position,
			this.state.salary,
			this.state.fullName,
			this.state.infoProf,
			this.state.tel,
			this.state.mail,
			this.state.address
		);
		this.setState({
			name: "",
			position: "",
			salary: "",
			fullName: "",
			infoProf: "",
			tel: "",
			mail: "",
			address: "",
		});
	};

	render() {
		const { name, position, salary, fullName, infoProf, tel, mail, address } =
			this.state;

		return (
			<div className="app-add-form">
				<h3>Додайте нового співробітника</h3>
				<form className="add-form" onSubmit={this.onSubmit}>
					<input
						type="text"
						className="form-control new-post-label"
						placeholder="Прізвище та імʼя"
						onChange={this.onValueChange}
						name="name"
						value={name}
						required
						minLength="2"
					/>
					<input
						type="text"
						className="form-control new-post-label"
						placeholder="Посада"
						onChange={this.onValueChange}
						name="position"
						value={position}
						required
						minLength="2"
					/>
					<input
						type="number"
						className="form-control new-post-label"
						placeholder={"З/П в ₴ ?"}
						onChange={this.onValueChange}
						name="salary"
						value={salary}
						required
						minLength="3"
					/>
					<input
						type="text"
						className="form-control new-post-label"
						placeholder={"Прізвище, імʼя, по-батькові"}
						onChange={this.onValueChange}
						name="fullName"
						value={fullName}
						required
						minLength="3"
					/>
					<input
						type="text"
						className="form-control new-post-label"
						placeholder={"Коротка інофрмація"}
						onChange={this.onValueChange}
						name="infoProf"
						value={infoProf}
						required
						minLength="3"
					/>
					<input
						type="number"
						className="form-control new-post-label"
						placeholder={"Номер телефону"}
						onChange={this.onValueChange}
						name="tel"
						value={tel}
						required
						minLength="3"
					/>
					<input
						type="text"
						className="form-control new-post-label"
						placeholder={"E-mail"}
						onChange={this.onValueChange}
						name="mail"
						value={mail}
						required
						minLength="3"
					/>
					<input
						type="text"
						className="form-control new-post-label"
						placeholder={"Домашня адреса"}
						onChange={this.onValueChange}
						name="address"
						value={address}
						required
						minLength="3"
					/>
					<button type="submit" className="btn btn-outline-light">
						Добавити
					</button>
				</form>
			</div>
		);
	}
}

export default EmployeesAddForm;
