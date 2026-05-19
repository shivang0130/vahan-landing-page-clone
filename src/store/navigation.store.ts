import { create } from "zustand";

interface NavigationState {
  activeDropdown: string | null;
  mobileMenuOpen: boolean;

  setActiveDropdown: (value: string | null) => void;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
}

export const useNavigationStore = create<NavigationState>(
  (set) => ({
    activeDropdown: null,
    mobileMenuOpen: false,

    setActiveDropdown: (value) =>
      set({ activeDropdown: value }),

    toggleMobileMenu: () =>
      set((state) => ({
        mobileMenuOpen: !state.mobileMenuOpen,
      })),

    closeMobileMenu: () =>
      set({ mobileMenuOpen: false }),
  })
);