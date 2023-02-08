import React from 'react';
import DataTable from 'react-data-table-component';
import FilterComponent from "react-data-table-component";
import {useSelector} from "react-redux";
import {useState} from "react";
import {mockedEmployees} from "../../data/mockedEmployees";

const columns = [
    {
        name: 'First Name',
        selector: row => row.firstName,
    },
    {
        name: 'Last Name',
        selector: row => row.lastName,
    },
    {
        name: 'Start Date',
        selector: row => row.startDate,
    },
    {
        name: 'Department',
        selector: row => row.department,
    },
    {
        name: 'Date of Birth',
        selector: row => row.dateOfBirth,
    },
    {
        name: 'Street',
        selector: row => row.street,
    },
    {
        name: 'City',
        selector: row => row.city,
    },
    {
        name: 'State',
        selector: row => row.state,
    },
    {
        name: 'Zip Code',
        selector: row => row.zip,
    }
];

function EmployeesTable() {
    const employees = useSelector(state => state.employees);
    employees.forEach(employee => {
        console.log(employee.firstName);
    });

    const [filterText, setFilterText] = employees;
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    // const filteredItems = employees.filter(
    //     item => item.firstName && item.firstName.toLowerCase().includes(filterText.toLowerCase()),
    // );

    const subHeaderComponentMemo = React.useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
        );
    }, [filterText, resetPaginationToggle]);

    return (
        <>
            <div className="search-bar">
                <label htmlFor="search">Search</label>
                <input
                    id="search"
                    name='search'
                    type="text"
                    placeholder="Rechercher un employé"
                    // value={filterText}
                    // onChange={e => setFilterText(e.target.value.toLowerCase())}
                />
            </div>
            <DataTable
                title="Contact List"
                columns={columns}
                data={mockedEmployees}
                pagination
                paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                subHeader
                subHeaderComponent={subHeaderComponentMemo}
                selectableRows
                persistTableHead
            />
        </>
    );
};

export default EmployeesTable;