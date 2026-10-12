"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiSend, FiCheckCircle, FiAlertCircle, FiArrowUpRight } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import SocialLinks from "./SocialLinks";
import { EMAIL } from "@/data/socials";
import { WEB3FORMS_ACCESS_KEY } from "@/data/contact";

const FIELD =
  "peer w-full border-0 border-b border-border/25 bg-transparent px-0 pb-2 pt-7 text-base text-foreground outline-none transition-colors focus:border-accent disabled:opacity-50";
const LABEL =
  "label pointer-events-none absolute left-0 top-6 transition-all duration-200 peer-focus:top-0 peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-0";

const META = [
  { k: "Email", v: EMAIL, href: `mailto:${EMAIL}` },
  { k: "Location", v: "Canada" },
  { k: "Response", v: "Usually within 24 hours" },
];

type Status = "idle" | "sending" | "sent" | "error" | "unconfigured";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // No key pasted yet → fall back to "email me directly" (never silently drop).
    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("unconfigured");
      setForm({ name: "", email: "", message: "" });
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New portfolio message from ${form.name}`,
          from_name: "Portfolio contact form",
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const sending = status === "sending";

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          index="05"
          eyebrow="Contact"
          title="Let's build something together"
          subtitle="Have a workflow worth automating or a system worth building? I'd love to hear about it."
        />

        <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* Left: info */}
          <ScrollReveal direction="left">
            <span className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.16em] text-accent">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for work
            </span>

            <dl className="mt-8 border-t border-border/15">
              {META.map((m) => (
                <div
                  key={m.k}
                  className="flex items-baseline justify-between gap-4 border-b border-border/15 py-4"
                >
                  <dt className="label">{m.k}</dt>
                  <dd className="text-right">
                    {m.href ? (
                      <a
                        href={m.href}
                        className="link-underline text-base font-medium text-foreground"
                      >
                        {m.v}
                      </a>
                    ) : (
                      <span className="text-base font-medium text-foreground">
                        {m.v}
                      </span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <SocialLinks className="mt-8" />
          </ScrollReveal>

          {/* Right: form */}
          <ScrollReveal direction="right" delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="relative">
                  <input
                    id="name"
                    type="text"
                    required
                    disabled={sending}
                    placeholder=" "
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className={FIELD}
                  />
                  <label htmlFor="name" className={LABEL}>
                    Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    required
                    disabled={sending}
                    placeholder=" "
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    className={FIELD}
                  />
                  <label htmlFor="email" className={LABEL}>
                    Email
                  </label>
                </div>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  required
                  disabled={sending}
                  rows={4}
                  placeholder=" "
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  className={`${FIELD} resize-none`}
                />
                <label htmlFor="message" className={LABEL}>
                  Message
                </label>
              </div>

              <button
                type="submit"
                disabled={sending}
                className="group inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3.5 text-sm font-medium text-accent-ink transition-all duration-300 hover:shadow-hard-accent hover:-translate-x-0.5 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-none"
              >
                <FiSend size={15} />
                {sending ? "Sending…" : "Send message"}
                {!sending && (
                  <FiArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                )}
              </button>

              <AnimatePresence mode="wait">
                {status === "sent" && (
                  <motion.div
                    key="sent"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 border-l border-accent py-2 pl-4 text-sm text-foreground/90"
                  >
                    <FiCheckCircle size={16} className="text-accent" />
                    Thanks! Your message is on its way. I&rsquo;ll get back to you
                    within 24 hours.
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 border-l border-red-400 py-2 pl-4 text-sm text-foreground/90"
                  >
                    <FiAlertCircle size={16} className="text-red-400" />
                    Something went wrong. Please email me directly at {EMAIL}.
                  </motion.div>
                )}

                {status === "unconfigured" && (
                  <motion.div
                    key="unconfigured"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 border-l border-accent py-2 pl-4 text-sm text-foreground/90"
                  >
                    <FiCheckCircle size={16} className="text-accent" />
                    Thanks! The form isn&rsquo;t live yet. Reach me directly at{" "}
                    {EMAIL} for now.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
