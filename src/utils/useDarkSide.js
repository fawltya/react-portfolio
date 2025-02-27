import { useState, useEffect } from "react";

export default function useDarkSide() {
  // Checks local storage and sets initialised state to light or dark
  const [theme, setTheme] = useState(localStorage.theme || "dark");
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
