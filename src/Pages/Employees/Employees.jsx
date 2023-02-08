import React from 'react';
import EmployeesTable from "../../Components/EmployeesTable/EmployeesTable";
import {Link} from "react-router-dom";
import './Employees.scss';


function Employees() {
    return (
        <div className='employees'>
            <h1>Current Employees</h1>
            <EmployeesTable/>
            <Link to="/">Home</Link>
        </div>
    );
}

export default Employees;