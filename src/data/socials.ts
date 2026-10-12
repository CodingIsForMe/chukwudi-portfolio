// Single source of truth for contact + social links. Edit here; every
// component (Hero, Contact, Footer) reads from this file.

export const EMAIL = "jchuks2020@gmail.com";

export interface SocialLink {
  /** Stable key used to pick the icon in <SocialLinks>. */
  key: "linkedin" | "github" | "email";
  label: string;
  href: string;
}

export const socialLinks: SocialLink[] = [
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chukwudi-justin/",
  },
  {
    key: "github",
    label: "GitHub",
    href: "https://github.com/CodingIsForMe",
  },
  {
    key: "email",
    label: "Email",
    href: `mailto:${EMAIL}`,
  },
];
