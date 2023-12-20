import { createAction, props } from "@ngrx/store";

export const reload = createAction("auth-reload", props<any>());
export const signin = createAction("auth-signin", props<any>());
export const signout = createAction("auth-signout");