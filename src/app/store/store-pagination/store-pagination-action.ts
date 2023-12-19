import { createAction, props } from "@ngrx/store";

// ROLE
export const loadInitRolePagination = createAction("load-init-role-paginaton", props<any>());
export const updateCurrentRolePage = createAction("update-current-role-page", props<any>());

// USER
export const loadInitUserPagination = createAction("load-init-user-paginaton", props<any>());
export const updateCurrentUserPage = createAction("update-current-user-page", props<any>());

export const updateStatusPage = createAction("update-status-page", props<any>());