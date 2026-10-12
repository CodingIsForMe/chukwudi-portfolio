"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import SocialLinks from "./SocialLinks";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/utils/cn";

const NAV_LINKS = [
  { id: "about", label: "About", num: "01" },
  { id: "experience", label: "Experience", num: "02" },
  { id: "projects", label: "Work", num: "03" },
  { id: "skills", label: "Skills", num: "04" },
  { id: "contact", label: "Contact", num: "05" },
];

const SECTION_IDS = ["hero", ...NAV_LINKS.map((l) => l.id)];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-border/15 bg-background/85 py-3 backdrop-blur-md"
            : "border-b border-transparent py-5"
        )}
      >
        <nav className="container-px flex items-center justify-between">
          {/* Wordmark */}
          <a
            href="#hero"
            className="font-heading text-xl font-semibold tracking-tight"
          >
            Chukwudi<span className="text-accent">.</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id} className="relative">
                  <a
                    href={`#${link.id}`}
                    className={cn(
                      "group flex items-baseline gap-1.5 py-1 text-sm font-medium transition-colors",
                      isActive
                        ? "text-foreground"
                        : "text-muted hover:text-foreground"
                    )}
                  >
                    <span className="font-mono text-[0.65rem] text-accent">
                      {link.num}
                    </span>
                    {link.label}
                  </a>
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-0.5 left-0 h-px w-full bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <a
              href="/resume.pdf"
              download
              className="hidden items-center gap-1.5 rounded-md border border-foreground px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:border-accent hover:text-accent-ink sm:inline-flex"
            >
              Résumé
              <FiArrowUpRight size={15} />
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              className="relative z-50 grid h-10 w-10 place-items-center rounded-md border border-border/20 text-foreground md:hidden"
            >
              {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-overlay"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-background md:hidden"
          >
            <ul className="container-px flex flex-col gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.12 + 0.06 * i }}
                  className="border-b border-border/15"
                >
                  <a
                    href={`#${link.id}`}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "flex items-baseline gap-3 py-3 font-heading text-4xl font-semibold tracking-tight transition-colors",
                      active === link.id
                        ? "text-accent"
                        : "text-foreground hover:text-accent"
                    )}
                  >
                    <span className="font-mono text-sm text-muted">
                      {link.num}
                    </span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="container-px mt-10 flex flex-col gap-6"
            >
              <a
                href="/resume.pdf"
                download
                onClick={() => setMenuOpen(false)}
                className="inline-flex w-fit items-center gap-2 rounded-md bg-accent px-6 py-3 text-base font-medium text-accent-ink"
              >
                Download Résumé
                <FiArrowUpRight size={16} />
              </a>
              <SocialLinks />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
