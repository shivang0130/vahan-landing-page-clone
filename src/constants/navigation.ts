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
    label: "Online Services",
    children: [
      { label: "Vehicle Registration", href: "#" },
      { label: "Fancy Number Booking", href: "#" },
      { label: "Tax Payment", href: "#" },
    ],
  },
  {
    label: "Informational Services",
    children: [
      { label: "RC Status", href: "#" },
      { label: "DL Services", href: "#" },
      { label: "Permit Details", href: "#" },
    ],
  },
  {
    label: "Dashboard",
    href: "#",
  },
  {
    label: "Contact",
    href: "#",
  },
];