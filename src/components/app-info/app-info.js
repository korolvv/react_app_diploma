import "./app-info.css";

const AppInfo = ({ employees, increased }) => {
	return (
		<div className="app-info">
			<h1>
				Облік співробітників у компанії
				<br />
				<strong>ProTech.Inc</strong>
			</h1>
			<h2>Загальне число співробітників: {employees}</h2>
			<h2>Премію отримають: {increased}</h2>
		</div>
	);
};

export default AppInfo;
