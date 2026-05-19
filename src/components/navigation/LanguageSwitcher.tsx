import { useLanguageStore } from "../../store/language.store";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const { language, setLanguage } =
    useLanguageStore();

  const handleLanguageChange = (
  lang: "en" | "hi"
) => {
  setLanguage(lang);

  i18n.changeLanguage(lang);

  document.body.className =
    lang === "hi"
      ? "hindi-font"
      : "english-font";
};

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() =>
          handleLanguageChange("en")
        }
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
        onClick={() =>
          handleLanguageChange("hi")
        }
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