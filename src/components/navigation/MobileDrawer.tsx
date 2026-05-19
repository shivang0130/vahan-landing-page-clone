import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { navigationItems } from "../../constants/navigation";
import { useNavigationStore } from "../../store/navigation.store";

const MobileDrawer = () => {
  const { mobileMenuOpen } =
    useNavigationStore();

  const [openDropdown, setOpenDropdown] =
    useState<string | null>(null);

  if (!mobileMenuOpen) return null;

  return (
    <div
      className="
        lg:hidden
        bg-white
        border-t border-slate-200
        shadow-md
      "
    >
      <div className="px-4 py-5 space-y-5">

        {navigationItems.map((item) => (
          <div key={item.label}>

            <button
              onClick={() =>
                setOpenDropdown(
                  openDropdown === item.label
                    ? null
                    : item.label
                )
              }
              className="
                w-full
                flex items-center justify-between
                text-left
                text-base
                font-medium
                text-slate-800
              "
            >
              {item.label}

              {item.children && (
                <ChevronDown
                  size={18}
                  className={`
                    transition-transform
                    ${
                      openDropdown === item.label
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />
              )}
            </button>

            {item.children &&
              openDropdown === item.label && (
                <div className="mt-3 ml-4 space-y-3">

                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="
                        block
                        text-sm
                        text-slate-600
                      "
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileDrawer;