import { createReducer, on } from "@ngrx/store";
import { open, close } from "./store-message-action";

const initialState = {
    status: false,
    content: ""
}

export const messageReducer = createReducer(
    initialState,
    on(open, (state, action) => {
        return {
            ...state,
            status: true,
            content: action.message
        }
    }),
    on(close, (state) => {
        return {
            ...state,
            status: false,
            content: ""
        }
    }),
)