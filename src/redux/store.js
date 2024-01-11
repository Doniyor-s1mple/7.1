
import { TodoReducer } from "./TodoReducer";
import { PostReducer } from "./PostReducer";

import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer: { TodoReducer, PostReducer }
})