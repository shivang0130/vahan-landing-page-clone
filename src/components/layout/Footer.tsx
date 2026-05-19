const Footer = () => {
  return (
    <footer
      className="
        mt-16
        bg-slate-900
        text-slate-300
      "
    >
      <div
        className="
          max-w-7xl mx-auto
          px-4 py-12
          grid
          grid-cols-1
          md:grid-cols-3
          gap-10
        "
      >
        <div>
          <h3 className="text-xl font-bold text-white">
            VAHAN
          </h3>

          <p className="mt-4 text-sm leading-relaxed">
            Smart vehicle and transport
            citizen services platform designed
            with accessibility and scalability
            in mind.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white">
            Services
          </h4>

          <div className="mt-4 space-y-3 text-sm">
            <p>Vehicle Registration</p>
            <p>Permit Services</p>
            <p>Tax Payment</p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white">
            Resources
          </h4>

          <div className="mt-4 space-y-3 text-sm">
            <p>Accessibility</p>
            <p>Support</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>

      <div
        className="
          border-t border-slate-800
          text-center
          py-4
          text-sm
        "
      >
        © 2026 VAHAN Citizen Services
      </div>
    </footer>
  );
};

export default Footer;