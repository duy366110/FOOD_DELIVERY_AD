import { createReducer, on } from "@ngrx/store";
import { reload, signin, signout } from "./store-user-action";

const initialState = {
    id: 0,
    email: "",
    phone: "",
    address: "",
    role: "",
    accessToken: "",
    refreshToken: ""
}

export const userReducer = createReducer(
    initialState,
    on(signin, (state: any, action: any) => {
        
        let {user, accessToken, refreshToken} = action;

        let {address, email, _id, phone, role} = user;
        localStorage.setItem('user', JSON.stringify({accessToken, address, email, id: _id, phone, refreshToken, role}));

        return {
            ...state,
            id: _id,
            address,
            email,
            phone,
            accessToken,
            refreshToken, role
        };
    }),
    on(reload, (state: any, action: any) => {
        let {accessToken, address, email, id, phone, refreshToken, role} = action;
        return {
            ...state,
            accessToken, address, email,
            id, phone, refreshToken, role
        };
    }),
    on(signout, (state: any) => {
        localStorage.clear();
        return {
            id: 0,
            email: "",
            phone: "",
            address: "",
            role: "",
            accessToken: "",
            refreshToken: ""
        }
    })
)