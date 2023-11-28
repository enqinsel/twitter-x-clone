import {configureStore} from "@reduxjs/toolkit";
import auth from "./auth/index.js";
const store = configureStore({
    reducer: {
        auth
    }
})

export default store;