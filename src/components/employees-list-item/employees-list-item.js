import "./employees-list-item.css";

import person from "../../img/person.png";
import telephone from "../../img/tel.png";
import email from "../../img/mail.png";
import location from "../../img/location.png";

const EmployeesListItem = (props) => {
	const {
		name,
		position,
		salary,
		onDelete,
		onToggleProp,
		increase,
		rise,
		info,
		hospital,
		vacation,
		fullName,
		infoProf,
		tel,
		mail,
		address,
	} = props;

	let classNames = "list-group-item d-flex justify-content-between";

	let classNamesInfo = "list-group-item hide";

	let btnHospital = "btn-sm btn-hospital";

	let btnVacation = "btn-sm btn-vacation";

	let btnInfo = "btn-sm btn-i";

	let btnCookie = "btn-cookie btn-sm";

	if (increase) {
		classNames += " increase";
		btnCookie += " btn-cookie-on";
	}

	if (rise) {
		classNames += " like";
	}

	if (info) {
		classNamesInfo += " show";
		btnInfo += " btn-i-on";
	}

	if (hospital) {
		classNames += " hospitalOn";
		btnHospital += " btn-hospitalOn";
	}

	if (vacation) {
		classNames += " vacationOn";
		btnVacation += " btn-vacationOn";
	}

	return (
		<div>
			<li className={classNames}>
				<span
					className="list-group-item-label"
					onClick={onToggleProp}
					data-toggle="rise"
					title="Внести на підвищення"
				>
					{name}
				</span>
				<input
					type="text"
					className="list-group-item-input"
					defaultValue={position}
					title="Посада"
				/>
				<input
					type="text"
					className="list-group-item-input"
					defaultValue={salary + "₴"}
					title="Зарплата"
				/>
				<div className="d-flex justify-content-center align-items-center">
					<button
						type="button"
						className={btnVacation}
						onClick={onToggleProp}
						data-toggle="vacation"
						title="Відпустка"
					>
						<i className="fas fa-suitcase-rolling"></i>
					</button>
					<button
						type="button"
						className={btnHospital}
						onClick={onToggleProp}
						data-toggle="hospital"
						title="Лікарняний"
					>
						<i className="fas fa-procedures"></i>
					</button>
					<button
						type="button"
						className={btnInfo}
						onClick={onToggleProp}
						data-toggle="info"
						title="Подробиці"
					>
						<i className="fas fa-info-circle"></i>
					</button>

					<button
						type="button"
						className={btnCookie}
						onClick={onToggleProp}
						data-toggle="increase"
						title="Премія"
					>
						<i className="fas fa-cookie"></i>
					</button>

					<button
						title="Видалити профіль"
						type="button"
						className="btn-trash btn-sm"
						onClick={onDelete}
					>
						<i className="fas fa-trash"></i>
					</button>
					<i title="Позначка підвищення" className="fas fa-star"></i>
				</div>
			</li>
			<li className={classNamesInfo}>
				<div className="infoBlock_1">
					<div className="infoBlock_1-img">
						<img src={person} alt="personImage" />
					</div>
					<div className="infoBlock_1-text">
						<div className="text-1">
							<div>{fullName}</div>
						</div>
						<div className="text-2">
							<div>{position}</div>
						</div>
						<div className="text-3">{infoProf}</div>
					</div>
				</div>
				<div className="infoBlock_2">
					<div className="infoBlock_2-info">
						<div className="tel">
							<img src={telephone} alt="telephone" />
							{tel}
						</div>
						<div className="mail">
							<img src={email} alt="mail" />
							{mail}
						</div>
						<div className="address">
							<img src={location} alt="location" />
							{address}
						</div>
					</div>
					<textarea
						placeholder="Введіть особисту інформацію..."
						className="text-4"
					/>
				</div>
			</li>
		</div>
	);
};

export default EmployeesListItem;
