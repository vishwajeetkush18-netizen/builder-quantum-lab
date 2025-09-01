import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import InteractiveLogo from "@/components/ui/interactive-logo";
import { Menu, LogIn } from "lucide-react";
import { useMemo } from "react";

export default function MobileNav() {
  const { pathname } = useLocation();

  const items = useMemo(
    () => [
      { to: "/dashboard", label: "Dashboard" },
      { to: "/reports", label: "Reports" },
      { to: "/alerts", label: "Alerts" },
      { to: "/ai-risk", label: "AI Risk" },
    ],
    [],
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Open menu"
          className="sm:hidden"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 p-0 flex h-full flex-col">
        <div className="flex items-center gap-2 px-6 py-4 border-b">
          <InteractiveLogo />
          <span className="text-lg font-semibold text-gray-900">
            Health Surveillance
          </span>
        </div>
        <nav className="px-2 py-4">
          <ul className="flex flex-col">
            {items.map((item) => {
              const active = pathname === item.to;
              return (
                <li key={item.to}>
                  <SheetClose asChild>
                    <Link
                      to={item.to}
                      className={`block rounded-md px-4 py-3 text-base font-medium transition-colors ${
                        active
                          ? "bg-blue-50 text-blue-700"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="mt-auto px-6 pb-6">
          <SheetClose asChild>
            <Link
              to="/login"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700"
              aria-label="Login"
            >
              <LogIn className="h-5 w-5" />
              Login
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
