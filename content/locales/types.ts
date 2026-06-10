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
    visual: {
      heading: string;
      subheading: string;
      modules: Array<{ label: string; detail: string }>;
      disclosure: string;
      statusLabel: string;
    };
  };
  alignment: {
    eyebrow: string;
    title: string;
    body: string;
    modalCloseLabel: string;
    modalKeyPointsLabel: string;
    modalClaimLabel: string;
    cards: Array<{
      number: string;
      eyebrow: string;
      title: string;
      body: string;
      cta: string;
      imageAlt: string;
      cardImage: string;
      modalImage: string;
      subtitle: string;
      expandedBody: string;
      keyPoints: string[];
      claimNote: string;
    }>;
    controlsLabel: string;
    controls: string[];
  };
  ecosystem: {
    eyebrow: string;
    title: string;
    body: string;
    selectorAria: string;
    items: Array<{
      label: string;
      eyebrow: string;
      title: string;
      short: string;
      body: string;
      image: string;
      imageAlt: string;
    }>;
  };
  iccr: {
    eyebrow: string;
    title: string;
    body: string;
    frameworkAria: string;
    frameworkLabel: string;
    frameworkTitle: string;
    frameworkBody: string;
    pillars: Array<{ title: string; body: string }>;
    noteLabel: string;
    note: string;
  };
  supply: {
    eyebrow: string;
    title: string;
    body: string;
    imageAlt: string;
    imageCaption: string;
    plannedVisual: {
      eyebrow: string;
      title: string;
      body: string;
      status: string;
    };
    readinessCards: Array<{ title: string; body: string }>;
    note: string;
  };
  capital: {
    eyebrow: string;
    title: string;
    body: string;
    dashboard: {
      kicker: string;
      title: string;
      subtitle: string;
      statusClusterLabel: string;
      statusCluster: string[];
      tiles: Array<{ title: string; status: string; description: string }>;
    };
    pathway: {
      eyebrow: string;
      title: string;
      note: string;
      ariaLabel: string;
      steps: string[];
    };
    claimControl: string;
  };
  governance: {
    eyebrow: string;
    title: string;
    body: string;
    frameworkAria: string;
    visualCaption: string;
    visualStatus: string;
    central: { eyebrow: string; title: string; body: string };
    nodes: Array<{ title: string; body: string }>;
    checklistTitle: string;
    controls: string[];
    disclosureLabel: string;
    disclosure: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    readiness: Array<{ title: string; body: string }>;
    form: {
      aria: string;
      eyebrow: string;
      title: string;
      intro: string;
      fields: {
        name: { label: string; placeholder: string };
        organisation: { label: string; placeholder: string };
        email: { label: string; placeholder: string };
        inquiryType: { label: string; placeholder: string };
        message: { label: string; placeholder: string };
      };
      inquiryOptions: string[];
      submitLabel: string;
      submitNote: string;
    };
    disclosure: string;
  };
  footer: {
    brandDescription: string;
    navigationLabel: string;
    platformHeading: string;
    governanceHeading: string;
    governanceItems: string[];
    staticExportHeading: string;
    staticExport: string;
    legalItems: string[];
    rights: string;
  };
};
