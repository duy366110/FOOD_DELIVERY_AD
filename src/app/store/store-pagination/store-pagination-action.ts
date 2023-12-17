import { createAction, props } from "@ngrx/store";

// CART
export const loadInitCartPagination = createAction("load-init-cart-paginaton", props<any>());
export const updateCurrentCartPage = createAction("update-current-cart-page", props<any>());

// ROLE
export const loadInitRolePagination = createAction("load-init-role-paginaton", props<any>());
export const updateCurrentRolePage = createAction("update-current-role-page", props<any>());

// PRODUCT
export const loadInitProductPagination = createAction("load-init-product-paginaton", props<any>());
export const updateCurrentProductPage = createAction("update-current-product-page", props<any>());

// ORDER
export const loadInitOrderPagination = createAction("load-init-order-paginaton", props<any>());
export const updateCurrentOrderPage = createAction("update-current-order-page", props<any>());

// USER
export const loadInitUserPagination = createAction("load-init-user-paginaton", props<any>());
export const updateCurrentUserPage = createAction("update-current-user-page", props<any>());

export const updateStatusPage = createAction("update-status-page", props<any>());