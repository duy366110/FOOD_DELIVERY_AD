import { createReducer, on } from "@ngrx/store";
import { toggleLoader } from "./loader-action";

const initialState = {
    status: false
}

export const loaderReducer = createReducer(
    initialState,
    on(toggleLoader, (state: any) => {
        return {
            status: !state.status
        };
    })
)