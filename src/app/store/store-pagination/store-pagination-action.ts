import { createAction, props } from "@ngrx/store";

// ROLE
export const loadInitRolePagination = createAction("load-init-role-paginaton", props<any>());
export const updateCurrentRolePage = createAction("update-current-role-page", props<any>());

// USER
export const loadInitUserPagination = createAction("load-init-user-paginaton", props<any>());
export const updateCurrentUserPage = createAction("update-current-user-page", props<any>());

// CATEGORY
export const loadInitCategoryPagination = createAction("load-init-category-paginaton", props<any>());
export const updateCurrentCategoryPage = createAction("update-current-category-page", props<any>());

// DISH
export const loadInitDishPagination = createAction("load-init-dish-paginaton", props<any>());
export const updateCurrentDishPage = createAction("update-current-dish-page", props<any>());

export const updateStatusPage = createAction("update-status-page", props<any>());