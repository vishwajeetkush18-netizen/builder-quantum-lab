import { Link, Outlet, useLocation } from "react-router-dom";
import { Bell, ClipboardList, Droplets, Home, Languages } from "lucide-react";
import { t, setLang, getLang } from "@/lib/i18n";

export default function MobileLayout() {
  const { pathname } = useLocation();
  const lang = getLang();
  return (
    <div className="min-h-svh flex flex-col bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 to-white">
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
