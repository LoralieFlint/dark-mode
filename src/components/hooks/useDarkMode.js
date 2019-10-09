import { useEffect } from 'react';
import {UseLocalStorage} from "./useLocalStorage";

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = UseLocalStorage("DarkMode", false)

    useEffect(() => {
      const body = document.querySelector("body");
        if (darkMode) {
          body.classList.add("dark-mode");
        } else {
          body.classList.remove("dark-mode");
        }
    }, [darkMode]);
    
    return [darkMode, setDarkMode]
};

