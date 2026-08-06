// app/components/ui/ThemeSwitcher.tsx
"use client"

import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark-mode") {
      setDark(true);
      document.body.classList.add("dark-mode")
    }
  },[]);
  
  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark-mode")
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "")
    }
  });
  return (
    <button id="theme-switcher" className="theme-switcher" onClick={() => setDark(!dark)}>
      {dark ? "🌙" : "☀️"}
    </button>
  )
}

export default ThemeSwitcher;