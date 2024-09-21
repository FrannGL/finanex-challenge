export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Finanex Challenge",
  description: "Bill of Lading fetch challenge.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Github",
      href: "https://github.com/FrannGL",
    },
    {
      label: "Discord",
      href: "https://discord.com/users/707360728910266458",
    },
    {
      label: "Portfolio",
      href: "https://franngl.vercel.app/en",
    },
  ],
  links: {
    github: "https://github.com/FrannGL",
    discord: "https://discord.com/users/707360728910266458",
    website: "https://franngl.vercel.app/en"
  },
};
