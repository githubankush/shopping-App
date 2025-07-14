let loaderFunctions = {
  showLoader: () => {},
  hideLoader: () => {},
};

export const setLoaderFunctions = (show, hide) => {
  loaderFunctions.showLoader = show;
  loaderFunctions.hideLoader = hide;
};

export const showLoader = () => loaderFunctions.showLoader();
export const hideLoader = () => loaderFunctions.hideLoader();
