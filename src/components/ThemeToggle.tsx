"use client";

import { useEffect, useState } from "react";

import { IconMoon, IconSun } from "./icons";

const STORAGE_KEY = "openhexa-theme";

export default function ThemeToggle() {
  // Le thème réel est déjà posé sur <html> par le script inline (voir layout.tsx)
  // avant l'hydratation, pour éviter tout flash. On ne fait que refléter/écrire l'état ici.
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(current === "dark" || current === "light" ? current : prefersDark ? "dark" : "light");
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // localStorage indisponible (navigation privée stricte) : le choix ne persiste pas, pas grave.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="theme-toggle"
      aria-label={theme === "dark" ? "Activer le thème clair" : "Activer le thème sombre"}
      aria-pressed={theme === "dark"}
    >
      {theme === "dark" ? <IconSun /> : <IconMoon />}
    </button>
  );
}
