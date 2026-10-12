"use client";

import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";

type Theme = "dark" | "light";

/**
 * Light/dark theme toggle. Dark is the default; the `.light` class on <html>
 * activates the light palette. Preference persists in localStorage. The
 * inline script in layout.tsx applies the saved theme before paint to avoid
 * a flash, so this component just syncs UI state and reacts to clicks.
 */
export default function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const isLight = document.documentElement.classList.contains("light");
    setTheme(isLight ? "light" : "dark");
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    const root = document.documentElement;
    if (next === "light") root.classList.add("light");
    else root.classList.remove("light");
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage may be unavailable — ignore */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className={cn(
        "relative grid h-10 w-10 place-items-center rounded-md border border-border/20 text-foreground transition-colors hover:border-accent hover:text-accent",
        className
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={mounted ? theme : "placeholder"}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.25 }}
          className="grid place-items-center"
        >
          {theme === "dark" ? <FiMoon size={18} /> : <FiSun size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
