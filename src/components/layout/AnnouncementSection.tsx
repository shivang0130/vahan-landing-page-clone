const announcements = [
  "Vehicle tax services upgraded for faster processing.",
  "New multilingual support added for citizen accessibility.",
  "Transport permit dashboard updated successfully.",
];

const AnnouncementSection = () => {
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
          Latest Announcements
        </h2>

        <div className="mt-6 space-y-4">

          {announcements.map((item) => (
            <div
              key={item}
              className="
                p-4
                rounded-2xl
                bg-slate-50
                border border-slate-100
              "
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnnouncementSection;