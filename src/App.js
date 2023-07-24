import './App.scss';
import {Link} from "react-router-dom";
import React, {useState} from "react";
import Select from "react-select";
import {useDispatch} from "react-redux";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import SelectUSState from "react-select-us-states";
import {Modal} from "artvera-react-modal";

const options = [
    {value: 'marketing', label: 'Marketing'},
    {value: 'sales', label: 'Sales'},
    {value: 'engineering', label: 'Engineering'},
    {value: 'hr', label: 'Human Resources'},
    {value: 'finance', label: 'Finance'},
    {value: 'legal', label: 'Legal'},
];

function App() {

    const dispatch = useDispatch();

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: new Date(),
        startDate: new Date(),
        street: '',
        city: '',
        state: '',
        zip: '',
        department: '',
    });

    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState('');

    console.log(new Date());

    const validateForm = (e) => {
        e.preventDefault();
        if (user.firstName === '') {
            setModalContent('Please enter a first name');
            setShowModal(true);

        } else if (user.lastName === '') {
            setModalContent('Please enter a last name');
            setShowModal(true);
        } else if (user.dateOfBirth > new Date()) {
            setModalContent('Please enter a valid date of birth');
            setShowModal(true);
        } else if (user.startDate > new Date()) {
            setModalContent('Please enter a valid start date');
            setShowModal(true);
        } else if (user.street === '') {
            setModalContent('Please enter a street');
            setShowModal(true);
        } else if (user.city === '') {
            setModalContent('Please enter a city');
            setShowModal(true);
        } else if (user.state === '') {
            setModalContent('Please enter a state');
            setShowModal(true);
        } else if (user.zip === '' || user.zip.length !== 5) {
            setModalContent('Please enter a valid zip code');
            setShowModal(true);
        } else if (user.department === '') {
            setModalContent('Please enter a department');
            setShowModal(true);
        } else {
            dispatch({
                type: 'employees/addEmployee',
                payload: {
                    ...user,
                    dateOfBirth: user.dateOfBirth.toLocaleDateString(),
                    startDate: user.startDate.toLocaleDateString(),
                }
            })
            setModalContent('Employee successfully created!')
            setShowModal(true);
        }
    };

    return (
        <div className="App">
            <h1>HRnet</h1>
            <Link to="/employees">View Current Employees</Link>
            <h2>Create Employee</h2>
            <form className={'form'} onSubmit={validateForm}>
                <label htmlFor={"firstName"}>First Name</label>
                <input type="text" name="firstName" onChange={(e) => setUser({...user, firstName: e.target.value})}/>
                <label htmlFor={"lastName"}>Last Name</label>
                <input type="text" name="lastName" onChange={(e) => setUser({...user, lastName: e.target.value})}/>
                <label htmlFor={"dateofbirth"}>Date of Birth</label>
                <DatePicker selected={user.dateOfBirth} onChange={(date) => setUser({...user, dateOfBirth: date})}/>
                <label htmlFor={"startdate"}>Start Date</label>
                <DatePicker selected={user.startDate} onChange={(date) => setUser({...user, startDate: date})}/>
                <fieldset>
                    <legend>Address</legend>
                    <label htmlFor={"street"}>Street</label>
                    <input type="text" name="street" onChange={(e) => setUser({...user, street: e.target.value})}/>
                    <label htmlFor={"city"}>City</label>
                    <input type="text" name="city" onChange={(e) => setUser({...user, city: e.target.value})}/>
                    <label htmlFor={"state"}>State</label>
                    <SelectUSState onChange={(e) => setUser({...user, state: e})}/>
                    <label htmlFor={"zip"}>Zip Code</label>
                    <input type="number" name="zip" onChange={(e) => setUser({...user, zip: e.target.value})}/>
                </fieldset>
                <label htmlFor={"department"}>Department</label>
                <Select options={options} onChange={(e) => setUser({...user, department: e.label})}/>
                <input type={'submit'} value={'Save'}/>
            </form>
            <Modal onClose={() => setShowModal(false)} show={showModal}>
                <p>{modalContent}</p>
            </Modal>
        </div>
    );
}

export default App;
