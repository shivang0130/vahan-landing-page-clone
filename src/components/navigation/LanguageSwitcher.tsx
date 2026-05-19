import { useLanguageStore } from "../../store/language.store";

const LanguageSwitcher = () => {
  const { language, setLanguage } =
    useLanguageStore();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage("en")}
        className={`
          px-3 py-1 rounded-md text-sm font-medium
          transition-colors
          ${
            language === "en"
              ? "bg-blue-700 text-white"
              : "bg-slate-100 text-slate-700"
          }
        `}
      >
        EN
      </button>

      <button
        onClick={() => setLanguage("hi")}
        className={`
          px-3 py-1 rounded-md text-sm font-medium
          transition-colors
          ${
            language === "hi"
              ? "bg-blue-700 text-white"
              : "bg-slate-100 text-slate-700"
          }
        `}
      >
        हिं
      </button>
    </div>
  );
};

export default LanguageSwitcher;