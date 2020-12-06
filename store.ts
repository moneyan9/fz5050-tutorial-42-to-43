import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import notesSlice from "./features/notesSlice";

const rootReducer = combineReducers({
    counterReducer: counterSlice.reducer,
    notesReducer: notesSlice.reducer
});
export type RootState = ReturnType<typeof rootReducer>

// export const store = configureStore({
//     reducer:counterSlice.reducer
// });


//export const store = configureStore({
//    reducer:notesSlice.reducer
//});

export const store = configureStore({
    reducer: rootReducer
});
