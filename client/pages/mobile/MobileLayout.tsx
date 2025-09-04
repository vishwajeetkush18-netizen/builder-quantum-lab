import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Bell, ClipboardList, Droplets, Home, Languages, Shield } from "lucide-react";
import { t, setLang, getLang } from "@/lib/i18n";

function Splash() {
  const [textIn, setTextIn] = useState(false);
  const [logoIn, setLogoIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const seen = typeof window !== "undefined" && sessionStorage.getItem("splash_seen");
    if (seen) return;
    const t1 = setTimeout(() => setLogoIn(true), 10); // slide-in start
    const t2 = setTimeout(() => setTextIn(true), 10); // fade-in text
    const t3 = setTimeout(() => setFadeOut(true), 1300); // hold ~1000ms after 300ms in
    const t4 = setTimeout(() => {
      if (typeof window !== "undefined") sessionStorage.setItem("splash_seen", "1");
    }, 1800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  if (typeof window !== "undefined" && sessionStorage.getItem("splash_seen")) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"}`}
      style={{
        background: "linear-gradient(135deg, rgba(15,157,88,0.55), rgba(15,157,88,0.35))",
      }}
      aria-label="App splash screen"
    >
      {/* Top-left logo badge */}
      <div
        className={`absolute top-4 left-4 w-9 h-9 rounded-full bg-white/15 flex items-center justify-center text-white backdrop-blur-sm border border-white/20 shadow-sm transition-all duration-300 ease-in-out ${logoIn ? "translate-x-0 translate-y-0 opacity-100" : "-translate-x-3 -translate-y-3 opacity-0"}`}
      >
        <Shield className="w-5 h-5" />
      </div>

      {/* Center glass panel with title + tagline */}
      <div
        className={`text-center select-none transform transition-all duration-500 ease-in-out ${fadeOut ? "opacity-0 scale-90" : "opacity-100 scale-100"}`}
      >
        <div className="px-8 py-6 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 shadow-lg">
          <div
            className={`text-white font-semibold tracking-wide drop-shadow-md transition-opacity duration-300 ${textIn ? "opacity-100" : "opacity-0"}`}
            style={{ fontSize: "36px", lineHeight: 1.1 }}
          >
            SwasthyaSetu
          </div>
          <div
            className={`text-white/90 mt-2 transition-opacity duration-300 ${textIn ? "opacity-100" : "opacity-0"}`}
            style={{ fontSize: "14px" }}
          >
            Connecting Health & Community
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MobileLayout() {
  const { pathname } = useLocation();
  const lang = getLang();
  return (
    <div className="min-h-svh flex flex-col bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 to-white">
      <Splash />
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-slate-900 text-white rounded-b-xl shadow">
        <div className="font-semibold">Community Care</div>
        <button
          className="inline-flex items-center gap-2 px-2 py-1 rounded bg-white/10"
          onClick={() =>
            setLang(lang === "en" ? "hi" : lang === "hi" ? "rg" : "en")
          }
          aria-label="Toggle language"
        >
          <Languages className="w-4 h-4" /> {lang.toUpperCase()}
        </button>
      </header>
      <main className="flex-1 p-3">
        <Outlet />
      </main>
      <nav className="sticky bottom-0 bg-white border-t rounded-t-xl grid grid-cols-4 gap-1 p-2">
        <Tab
          to="/app"
          icon={<Home className="w-5 h-5" />}
          active={pathname === "/app"}
        >
          Home
        </Tab>
        <Tab
          to="/app/report"
          icon={<ClipboardList className="w-5 h-5" />}
          active={pathname.startsWith("/app/report")}
        >
          {t("healthReport")}
        </Tab>
        <Tab
          to="/app/water"
          icon={<Droplets className="w-5 h-5" />}
          active={pathname.startsWith("/app/water")}
        >
          {t("waterTest")}
        </Tab>
        <Tab
          to="/app/notifications"
          icon={<Bell className="w-5 h-5" />}
          active={pathname.startsWith("/app/notifications")}
        >
          {t("notifications")}
        </Tab>
      </nav>
    </div>
  );
}

function Tab({
  to,
  icon,
  children,
  active,
}: {
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  active: boolean;
}) {
  return (
    <Link
      to={to}
      className={`flex flex-col items-center justify-center rounded-md px-2 py-1 text-xs ${active ? "text-blue-600 bg-blue-50" : "text-slate-700"}`}
    >
      {icon}
      <span className="mt-1">{children}</span>
    </Link>
  );
}
