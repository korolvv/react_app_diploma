import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

const EmployeesList = ({ newData, onDelete, onToggleProp }) => {
	const elements = newData.map((item) => {
		const { id, ...itemProps } = item;

		return (
			<EmployeesListItem
				key={id}
				{...itemProps}
				onDelete={() => onDelete(id)}
				onToggleProp={(e) =>
					onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))
				}
			/>
		); //  {...item} = name={item.name} salary={item.salary} spread-оператор !
	});

	return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
