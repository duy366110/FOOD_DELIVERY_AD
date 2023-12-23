import { createAction, props } from "@ngrx/store";

export const open = createAction("open-message", props<any>());
export const close = createAction("close-message");