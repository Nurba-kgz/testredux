import {configureStore} from "@reduxjs/toolkit";
import registrationSlice from "./RegistrationSlices";


export const store = configureStore({
    reducer: {
        registrationSlice
    },
})
