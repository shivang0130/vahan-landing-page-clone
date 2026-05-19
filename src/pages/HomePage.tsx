import Navbar from "../components/navigation/Navbar";
import MobileDrawer from "../components/navigation/MobileDrawer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-50">

      <Navbar />

      <MobileDrawer />

      <main className="max-w-7xl mx-auto px-4 py-10">

        <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100">

          <h1 className="text-5xl font-bold text-slate-900">
            VAHAN Citizen Services
          </h1>

          <p className="mt-5 text-lg text-slate-600 max-w-3xl">
            Modernized vehicle and transport
            services portal with multilingual
            accessibility and responsive citizen
            experience.
          </p>
        </div>
      </main>
    </div>
  );
};

export default HomePage;