import TopStrip from "../components/layout/TopStrip";
import Navbar from "../components/navigation/Navbar";
import MobileDrawer from "../components/navigation/MobileDrawer";

import HeroSection from "../components/layout/HeroSection";
import StatsSection from "../components/layout/StatsSection";
import QuickLinks from "../components/layout/QuickLinks";
import AnnouncementSection from "../components/layout/AnnouncementSection";
import Footer from "../components/layout/Footer";

import ServiceCard from "../components/cards/ServiceCard";

import { services } from "../constants/services";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-50">

      <TopStrip />

      <Navbar />

      <MobileDrawer />

      <main className="max-w-7xl mx-auto px-4 py-8">

        <HeroSection />

        <StatsSection />

        {/* Services */}
        <section className="mt-14">

          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-slate-900">
              Popular Services
            </h2>
          </div>

          <div
            className="
              mt-8
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              gap-6
            "
          >
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </section>

        <QuickLinks />

        <AnnouncementSection />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;