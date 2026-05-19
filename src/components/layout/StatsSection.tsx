const stats = [
  {
    label: "Registered Vehicles",
    value: "32M+",
  },

  {
    label: "Daily Transactions",
    value: "120K+",
  },

  {
    label: "Active Services",
    value: "85+",
  },

  {
    label: "States Connected",
    value: "28",
  },
];

const StatsSection = () => {
  return (
    <section className="mt-12">

      <div
        className="
          grid
          grid-cols-2
          lg:grid-cols-4
          gap-6
        "
      >
        {stats.map((item) => (
          <div
            key={item.label}
            className="
              bg-white
              rounded-3xl
              p-6
              border border-slate-100
              shadow-sm
            "
          >
            <h3
              className="
                text-3xl
                font-bold
                text-blue-700
              "
            >
              {item.value}
            </h3>

            <p className="mt-2 text-slate-600">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;