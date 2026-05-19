const quickLinks = [
  "Vehicle Registration",
  "Tax Services",
  "Permit Application",
  "RC Verification",
  "Citizen Dashboard",
  "Support Center",
];

const QuickLinks = () => {
  return (
    <section className="mt-12">

      <div
        className="
          bg-white
          rounded-3xl
          border border-slate-100
          p-8
          shadow-sm
        "
      >
        <h2 className="text-2xl font-bold text-slate-900">
          Quick Access
        </h2>

        <div
          className="
            mt-6
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-4
          "
        >
          {quickLinks.map((item) => (
            <button
              key={item}
              className="
                p-4
                rounded-2xl
                border border-slate-200
                hover:border-blue-700
                hover:bg-blue-50
                transition-all
                text-left
                font-medium
              "
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;