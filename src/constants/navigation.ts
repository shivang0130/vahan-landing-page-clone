export interface NavItem {
  label: string;
  href?: string;
  children?: {
    label: string;
    href: string;
  }[];
}

export const navigationItems: NavItem[] = [
  {
    label: "Vehicle Services",

    children: [
      {
        label: "New Vehicle Registration",
        href: "#",
      },

      {
        label: "Duplicate RC",
        href: "#",
      },

      {
        label: "Transfer of Ownership",
        href: "#",
      },

      {
        label: "NOC Services",
        href: "#",
      },
    ],
  },

  {
    label: "Permit Services",

    children: [
      {
        label: "National Permit",
        href: "#",
      },

      {
        label: "Temporary Permit",
        href: "#",
      },

      {
        label: "Permit Renewal",
        href: "#",
      },
    ],
  },

  {
    label: "Online Services",

    children: [
      {
        label: "Tax Payment",
        href: "#",
      },

      {
        label: "Fancy Number Booking",
        href: "#",
      },

      {
        label: "RC Status",
        href: "#",
      },
    ],
  },

  {
    label: "Dashboard",
    href: "#",
  },
];