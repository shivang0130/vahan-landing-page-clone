import { Menu, X, ChevronDown } from "lucide-react";
import { navigationItems } from "../../constants/navigation";
import { useNavigationStore } from "../../store/navigation.store";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const {
    activeDropdown,
    setActiveDropdown,
    mobileMenuOpen,
    toggleMobileMenu,
  } = useNavigationStore();

  return (
    <header className="w-full bg-white shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-700" />

            <div>
              <h1 className="text-lg font-bold text-slate-900">
                VAHAN
              </h1>

              <p className="text-xs text-slate-500">
                Citizen Services
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">

            {navigationItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.children &&
                  setActiveDropdown(item.label)
                }
                onMouseLeave={() =>
                  setActiveDropdown(null)
                }
              >
                <button
                  className="
                    flex items-center gap-1
                    text-sm font-medium
                    text-slate-700
                    hover:text-blue-700
                    transition-colors
                  "
                >
                  {item.label}

                  {item.children && (
                    <ChevronDown size={16} />
                  )}
                </button>

                {/* Dropdown */}
                {item.children &&
                  activeDropdown === item.label && (
                    <div
                      className="
                        absolute top-10 left-0
                        w-64
                        bg-white
                        rounded-xl
                        shadow-xl
                        border border-slate-100
                        overflow-hidden
                        z-50
                      "
                    >
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="
                            block px-5 py-3
                            text-sm text-slate-700
                            hover:bg-slate-50
                            hover:text-blue-700
                            transition-colors
                          "
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
              </div>
            ))}

            <LanguageSwitcher />
          </nav>

          {/* Mobile Button */}
          <button
            className="lg:hidden"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;