import {configureStore, createSlice} from "@reduxjs/toolkit";

const employeesSlice = createSlice({
    name: "employees",
    initialState: [],
    reducers: {
        addEmployee: (state, action) => {
            const newEmployee = {
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                dateOfBirth: action.payload.dateOfBirth,
                startDate: action.payload.startDate,
                street: action.payload.street,
                city: action.payload.city,
                state: action.payload.state,
                zip: action.payload.zip,
                department: action.payload.department,
            };
            state.push(newEmployee);
        }
    }
});

export const store = configureStore({
   reducer: {
         employees: employeesSlice.reducer
   }
});



