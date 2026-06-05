export type NavItem = {
  label: string;
  href: string;
};

export type MegaMenuLink = NavItem & {
  description: string;
};

export type MegaMenuGroup = {
  eyebrow: string;
  heading: string;
  description: string;
  links: MegaMenuLink[];
};

export type MegaMenuCard = {
  eyebrow: string;
  title: string;
  description: string;
  placeholderAria: string;
  placeholderLabels: string[];
};

export type LocaleContent = {
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  language: {
    label: string;
    linksHeading: string;
    switchTo: string;
    options: Record<string, string>;
  };
  nav: {
    aria: string;
    homeAria: string;
    brandName: string;
    logoMark: string;
    logoAlt: string;
    claimRibbon: string;
    menuOpen: string;
    menuClose: string;
    items: NavItem[];
    contact: string;
    mega: {
      trigger: string;
      overlayLabel: string;
      groups: MegaMenuGroup[];
      cards: MegaMenuCard[];
    };
  };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    note: string;
    imageAlt: string;
    imageCaption: string;
  };
  alignment: {
    eyebrow: string;
    title: string;
    body: string;
    cards: Array<{ number: string; title: string; body: string }>;
  };
  ecosystem: {
    eyebrow: string;
    title: string;
    body: string;
    imageAlt: string;
    imageCaption: string;
  };
  iccr: {
    eyebrow: string;
    title: string;
    pillars: string[];
    note: string;
    imageAlt: string;
    imageCaption: string;
  };
  supply: {
    eyebrow: string;
    title: string;
    body: string;
    imageAlt: string;
    imageCaption: string;
  };
  capital: {
    eyebrow: string;
    title: string;
    body: string;
    cards: Array<{ title: string; body: string }>;
  };
  governance: {
    eyebrow: string;
    title: string;
    items: string[];
    imageAlt: string;
    imageCaption: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
    imageAlt: string;
    imageCaption: string;
  };
  footer: {
    body: string;
    rights: string;
    staticExport: string;
  };
};
