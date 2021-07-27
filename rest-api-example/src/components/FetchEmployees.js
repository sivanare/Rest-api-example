import { useState, useEffect } from 'react';
import axios from 'axios';

function FetchEmployees() {
	const [employees, setEmployees] = useState([]);

	useEffect(() => {
		axios
			.get('http://dummy.restapiexample.com/api/v1/employees')
			.then(function (response) {
				setEmployees(response.data.data);
			})
			.catch((error) => console.log(error));
	}, []);

	const listItems = employees.map((item) => {
		return (
			<li key={item.id}>
				<h2 key={item.employee_name}>Name : {item.employee_name}</h2>
				<p key={item.employee_salary}>Salary : {item.employee_salary}</p>
				<p key={item.employee_age}>Age : {item.employee_age}</p>
			</li>
		);
	});

	return (
		<div>
			<h1>Employees</h1>
			<ul>{listItems}</ul>
		</div>
	);
}

export default FetchEmployees;
