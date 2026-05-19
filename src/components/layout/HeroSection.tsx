import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
    const { t } = useTranslation();

    return (
        <section
            className="
        relative overflow-hidden
        rounded-[40px]
        bg-gradient-to-r
        from-blue-700
        to-indigo-700
        p-10 lg:p-16
        text-white
      "
        >
            <div
                className="
    absolute
    top-0 right-0
    w-72 h-72
    bg-white/10
    rounded-full
    blur-3xl
  "
            />
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1
                    className="
            text-4xl lg:text-6xl
            font-bold
            max-w-4xl
            leading-tight
          "
                >
                    {t("hero.title")}
                </h1>

                <p
                    className="
            mt-6
            text-lg lg:text-xl
            max-w-3xl
            text-blue-100
            leading-relaxed
          "
                >
                    {t("hero.subtitle")}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                    <button
                        className="
              px-6 py-3
              rounded-xl
              bg-white
              text-blue-700
              font-semibold
              hover:scale-105
              transition-transform
            "
                    >
                        Explore Services
                    </button>

                    <button
                        className="
              px-6 py-3
              rounded-xl
              border border-white/30
              text-white
              hover:bg-white/10
              transition-colors
            "
                    >
                        Learn More
                    </button>
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;