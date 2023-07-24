import React from 'react';
import DataTable from 'react-data-table-component';
import FilterComponent from "react-data-table-component";
import {useSelector} from "react-redux";
import {useState, useMemo} from "react";
import {mockedEmployees} from "../../data/mockedEmployees";

const columns = [
    {
        name: 'First Name',
        selector: row => row.firstName,
        sortable: true,
    },
    {
        name: 'Last Name',
        selector: row => row.lastName,
        sortable: true,
    },
    {
        name: 'Start Date',
        selector: row => row.startDate,
        sortable: true,
    },
    {
        name: 'Department',
        selector: row => row.department,
        sortable: true,
    },
    {
        name: 'Date of Birth',
        selector: row => row.dateOfBirth,
        sortable: true,
    },
    {
        name: 'Street',
        selector: row => row.street,
        sortable: true,
    },
    {
        name: 'City',
        selector: row => row.city,
        sortable: true,
    },
    {
        name: 'State',
        selector: row => row.state,
        sortable: true,
    },
    {
        name: 'Zip Code',
        selector: row => row.zip,
        sortable: true,
    }
];

function EmployeesTable() {
    const employees = useSelector(state => state.employees);
    const [search, setSearch] = useState('');
    console.log(search);

    const filteredEmployees = useMemo(() => {
        return employees.filter(employee => {
            return employee.lastName.toLowerCase().includes(search.toLowerCase()) || employee.firstName.toLowerCase().includes(search.toLowerCase());
        })
    });

    const orderFilter = useMemo(() => {
        return (
            <FilterComponent onFilter={e => console.log(e)} filterText={filteredEmployees}/>
        );
    })

    return (
        <>
            <div className="search-bar">
                <label htmlFor="search">Search</label>
                <input
                    id="search"
                    name='search'
                    type="text"
                    placeholder="Rechercher un employé"
                    value={search}
                    onChange={e => setSearch(e.target.value)}

                />
            </div>
            <DataTable
                title="Contact List"
                columns={columns}
                data={filteredEmployees}
                pagination
                subHeader
                subHeaderComponent={orderFilter}
            />
        </>
    );
};

export default EmployeesTable;