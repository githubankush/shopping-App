// src/utils/LoadingController.js
let showLoadingFn = () => {};
let hideLoadingFn = () => {};

export const registerLoading = (showFn, hideFn) => {
  showLoadingFn = showFn;
  hideLoadingFn = hideFn;
};

export const showLoading = () => showLoadingFn();
export const hideLoading = () => hideLoadingFn();
