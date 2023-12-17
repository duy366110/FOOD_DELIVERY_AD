import { createReducer, on } from "@ngrx/store";
import {
    // ROLE
    loadInitRolePagination,
    updateCurrentRolePage,

    updateStatusPage
} from "./store-pagination-action";

const initialState = {
    role: {
        totalAmount: 0,
        totalItemInPage: 1,
        totalPage: 0,
        currentPage: 0,
        status: false
    },
}

export const paginationReducer = createReducer(
    initialState,
    // COMMON
    on(updateStatusPage, (state, action) => {
        let { kind } = action;
        if(kind === "role") {
            return {
                ...state,
                role: {
                    ...state.role,
                    status: false
                }
            }
        }

        return state;
    }),

    // ROLE
    on(loadInitRolePagination, (state, action) => {
        let { amount } = action;
        return {
            ...state,
            role: {
                ...state.role,
                totalAmount: amount,
                totalPage: Math.ceil(amount / state.role.totalItemInPage),
                status: true
            }
        };
    }),
    on(updateCurrentRolePage, (state, action) => {
        let { page, section } = action;
        if(section === "role") {
            return {
                ...state,
                role: {
                    ...state.role,
                    currentPage: page
                }
            }
        }

        return state;
    }),
)