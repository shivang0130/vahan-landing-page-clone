const TopStrip = () => {
  return (
    <div
      className="
        bg-slate-900
        text-slate-200
        text-sm
      "
    >
      <div
        className="
          max-w-7xl mx-auto
          px-4 py-2
          flex items-center
          justify-between
        "
      >
        <p>
          Government of India Transport Services
        </p>

        <div className="flex items-center gap-5">
          <button className="hover:text-white transition-colors">
            Accessibility
          </button>

          <button className="hover:text-white transition-colors">
            Sitemap
          </button>

          <button className="hover:text-white transition-colors">
            Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopStrip;