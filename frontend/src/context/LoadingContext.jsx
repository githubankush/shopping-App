import { createContext, useContext, useState, useEffect } from "react";
import { setLoaderFunctions } from "../utils/loaderControl"; // 🔗 Link to axios helper

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const showLoader = () => setIsLoading(true);
  const hideLoader = () => setIsLoading(false);

  useEffect(() => {
    // register loader globally for axios to access
    setLoaderFunctions(showLoader, hideLoader);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, showLoader, hideLoader }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
