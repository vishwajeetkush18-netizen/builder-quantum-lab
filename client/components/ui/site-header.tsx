import { Link, useLocation } from "react-router-dom";
import InteractiveLogo from "@/components/ui/interactive-logo";
import { User } from "lucide-react";
import MobileNav from "@/components/ui/mobile-nav";

function NavLink({ to, label }: { to: string; label: string }) {
  const { pathname } = useLocation();
  const active = pathname === to;
  return (
    <Link
      to={to}
      className={
        "relative px-1 text-gray-600 hover:text-blue-600 transition-colors font-medium " +
        (active ? "text-blue-600" : "") +
        " after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-blue-600 after:transition-transform after:duration-300 after:origin-left " +
        (active
          ? "after:scale-x-100"
          : "after:scale-x-0 hover:after:scale-x-100")
      }
    >
      {label}
    </Link>
  );
}

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 glass-header-bright px-4 py-3 sm:px-6 sm:py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <InteractiveLogo />
          <span className="text-lg font-semibold text-gray-900">
            Health Surveillance
          </span>
        </div>
        <nav className="hidden sm:flex flex-1 items-center justify-center space-x-8">
          <NavLink to="/dashboard" label="Dashboard" />
          <NavLink to="/reports" label="Reports" />
          <NavLink to="/alerts" label="Alerts" />
          <NavLink to="/ai-risk" label="AI Risk" />
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/login"
            className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-blue-700 hover:scale-110 hover:shadow-lg ring-2 ring-transparent hover:ring-blue-200"
            title="Login"
          >
            <User className="w-6 h-6 text-white transition-transform duration-200 group-hover:scale-110" />
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
