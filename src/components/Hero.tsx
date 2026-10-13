"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiArrowRight, FiArrowDown } from "react-icons/fi";
import SocialLinks from "./SocialLinks";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-16"
    >
      <div className="container-px grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* Left: editorial headline block */}
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div
            variants={item}
            className="flex items-center gap-3 text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="label">Available for work · Lethbridge, AB</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-7 font-heading text-[clamp(3.4rem,11vw,8rem)] font-semibold leading-[0.92] tracking-[-0.03em]"
          >
            Chukwudi<span className="text-accent">.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl font-heading text-2xl font-normal leading-snug text-foreground sm:text-3xl"
          >
            I build intelligent systems &amp; automated workflows that{" "}
            <span className="italic text-accent">run themselves.</span>
          </motion.p>

          <motion.div
            variants={item}
            className="mt-6 flex items-center gap-3 text-sm"
          >
            <span className="label shrink-0">Currently</span>
            <span className="h-px w-6 bg-border/25" />
            <TypeAnimation
              sequence={[
                "AI Engineer",
                2000,
                "Automation Architect",
                2000,
                "Full Stack Builder",
                2000,
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
              className="font-mono font-medium text-foreground"
              cursor
            />
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3.5 text-sm font-medium text-accent-ink transition-all duration-300 hover:shadow-hard-accent hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              View the work
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="link-underline text-sm font-medium text-foreground"
            >
              Download Résumé
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10">
            <SocialLinks />
          </motion.div>
        </motion.div>

        {/* Right: small, dark-framed portrait — a gallery print, set to the right.
            The photo (profile.jpg) is the original studio headshot; here it sits
            in a warm near-black mat with a hairline edge so the frame reads in
            both the light and dark palettes. Kept intentionally compact. */}
        <motion.figure
          initial={{ opacity: 0, y: 26, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: -1.5 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-[16.5rem] justify-self-center lg:-mr-3 lg:justify-self-end"
        >
          {/* Offset frame behind, for a printed/stacked feel */}
          <span className="absolute -inset-2 -z-10 translate-x-3 translate-y-3 rounded-md border border-border/30" />

          {/* Dark gallery frame (mat) */}
          <div className="rounded-md bg-[#26211B] p-3 shadow-lift ring-1 ring-foreground/15">
            <div className="relative aspect-square w-full overflow-hidden rounded-[3px] ring-1 ring-black/25">
              <Image
                src="/images/profile.jpg"
                alt="Chukwudi, AI Engineer & Automation Architect"
                fill
                priority
                sizes="(max-width: 1024px) 70vw, 264px"
                className="object-cover object-top [filter:contrast(1.04)_saturate(1.03)]"
              />
            </div>
          </div>

          {/* Caption */}
          <figcaption className="mt-3 flex items-center justify-between">
            <span className="label">Chukwudi J.</span>
            <span className="label text-accent">Est. ’25</span>
          </figcaption>
        </motion.figure>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-muted transition-colors hover:text-accent sm:flex"
      >
        <span className="label">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiArrowDown size={14} />
        </motion.span>
      </motion.a>
    </section>
  );
}
