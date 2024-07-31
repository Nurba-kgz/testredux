import React from 'react';
import {createSlice} from "@reduxjs/toolkit";

const registrationSlice = createSlice({
    name: 'RegistrationSlice',
    initialState: {
        persons: []
    },
    reducers: {
        getUsers: (state, action) => {
            state.persons.push(action.payload)
        }
    }
})


export const {getUsers} = registrationSlice.actions
export default registrationSlice.reducer