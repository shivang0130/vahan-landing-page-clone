import { navigationItems } from "../../constants/navigation";
import { useNavigationStore } from "../../store/navigation.store";

const MobileDrawer = () => {
  const { mobileMenuOpen } =
    useNavigationStore();

  if (!mobileMenuOpen) return null;

  return (
    <div className="lg:hidden bg-white border-t border-slate-200 shadow-md">

      <div className="px-4 py-5 space-y-5">

        {navigationItems.map((item) => (
          <div key={item.label}>

            <button
              className="
                w-full text-left
                text-base font-medium
                text-slate-800
              "
            >
              {item.label}
            </button>

            {item.children && (
              <div className="mt-3 ml-4 space-y-3">

                {item.children.map((child) => (
                  <a
                    key={child.label}
                    href={child.href}
                    className="
                      block text-sm
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