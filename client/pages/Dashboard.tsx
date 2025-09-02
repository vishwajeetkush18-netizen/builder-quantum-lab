import { Link } from "react-router-dom";
import { Users, Droplet, AlertTriangle, TrendingUp, User } from "lucide-react";
import { useEffect, useState } from "react";
import KPIStat from "@/components/ui/kpi-card";
import SiteFooter from "@/components/ui/site-footer";
import SiteHeader from "@/components/ui/site-header";

export default function Dashboard() {
  const [activeIcon, setActiveIcon] = useState<string | null>(null);
  const [activeSegment, setActiveSegment] = useState<
    "yellow" | "green" | "blue" | null
  >(null);
  const [stats, setStats] = useState({
    cases: 1200,
    water: 350,
    activeAlerts: 15,
    highRiskVillages: 5,
  });

  const handleIconClick = (iconName: string, action: string) => {
    console.log(`${iconName} clicked - ${action}`);
    setActiveIcon(iconName);

    // Reset active state after animation
    setTimeout(() => setActiveIcon(null), 200);

    // Add your navigation or action logic here
    switch (iconName) {
      case "logo":
        console.log("Navigate to home");
        break;
      case "profile":
        console.log("Open user profile");
        break;
      case "users":
        console.log("Navigate to cases overview");
        break;
      case "droplet":
        console.log("Navigate to water testing results");
        break;
      case "alert":
        console.log("Navigate to alerts management");
        break;
      case "trending":
        console.log("Navigate to analytics dashboard");
        break;
    }
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          entry.target.classList.remove("is-visible");
        }
      });
    }, observerOptions);

    // Observe all scroll-reveal elements
    const elements = document.querySelectorAll(
      ".scroll-reveal, .scroll-reveal-fade, .scroll-reveal-slide-left, .scroll-reveal-slide-right, .scroll-reveal-scale",
    );
    elements.forEach((element) => {
      observer.observe(element);
    });

    fetch("/api/stats")
      .then((r) => r.json())
      .then(setStats)
      .catch(() => {});

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
      {/* Header */}
      <SiteHeader />

      {/* Main Content */}
      <main className="p-8 space-y-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          <KPIStat
            label="Total cases reported today"
            value={String(stats.cases)}
            icon={<Users className="w-7 h-7 text-white" />}
            accent="blue"
            deltaText="↗ +12.5% from yesterday"
            deltaClassName="text-green-500"
          />
          <KPIStat
            label="Water sources tested"
            value={String(stats.water)}
            icon={<Droplet className="w-7 h-7 text-white" />}
            accent="green"
            deltaText="↗ +8.2% from last week"
            deltaClassName="text-blue-500"
          />
          <KPIStat
            label="Active alerts"
            value={String(stats.activeAlerts)}
            icon={<AlertTriangle className="w-7 h-7 text-white" />}
            accent="orange"
            deltaText="⚠ Requires attention"
            deltaClassName="text-orange-500"
          />
          <KPIStat
            label="Villages at High Risk"
            value={String(stats.highRiskVillages)}
            icon={<TrendingUp className="w-7 h-7 text-gray-700" />}
            accent="purple"
            deltaText="📊 Trending analysis"
            deltaClassName="text-purple-500"
          />
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="xl:col-span-2 glass-card-bright rounded-2xl p-8 scroll-reveal-slide-left">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Village District
            </h2>
            <div className="relative h-80 bg-gradient-to-br from-white to-gray-100 rounded-xl overflow-hidden border border-gray-200">
              {/* Map Background */}
              <div className="absolute inset-0 opacity-30">
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  <path
                    d="M50 50 Q150 30 250 50 Q350 70 350 150 Q320 250 200 280 Q80 250 50 150 Z"
                    fill="#93C5FD"
                    opacity="0.3"
                  />
                  <path
                    d="M100 80 Q180 60 280 90 Q320 120 300 200 Q250 240 150 230 Q100 200 100 120 Z"
                    fill="#34D399"
                    opacity="0.2"
                  />
                </svg>
              </div>

              {/* Map Markers */}
              <div className="absolute inset-0 p-4">
                {/* Green circles - safe areas */}
                <div className="absolute top-12 left-12 w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="absolute top-20 left-24 w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="absolute top-16 left-40 w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="absolute top-32 left-16 w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="absolute top-28 left-32 w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="absolute top-36 left-48 w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="absolute top-44 left-20 w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="absolute top-40 left-36 w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="absolute top-52 left-28 w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="absolute top-48 left-44 w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="absolute top-56 left-52 w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="absolute top-64 left-24 w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="absolute top-60 left-40 w-3 h-3 bg-green-500 rounded-full"></div>

                {/* Orange triangles - warning areas */}
                <div className="absolute top-24 left-52 w-0 h-0 border-l-2 border-r-2 border-b-3 border-transparent border-b-orange-500"></div>
                <div className="absolute top-40 left-56 w-0 h-0 border-l-2 border-r-2 border-b-3 border-transparent border-b-orange-500"></div>
                <div className="absolute top-56 left-32 w-0 h-0 border-l-2 border-r-2 border-b-3 border-transparent border-b-orange-500"></div>
                <div className="absolute top-64 left-48 w-0 h-0 border-l-2 border-r-2 border-b-3 border-transparent border-b-orange-500"></div>

                {/* Red squares - danger areas */}
                <div className="absolute top-36 left-60 w-3 h-3 bg-red-500"></div>
                <div className="absolute top-52 left-60 w-3 h-3 bg-red-500"></div>
                <div className="absolute top-68 left-36 w-3 h-3 bg-red-500"></div>

                {/* Tooltip */}
                <div className="absolute top-40 left-48 glass-bright rounded-lg p-3 text-sm z-10 border border-gray-200">
                  <div className="font-semibold text-gray-900">
                    Village: Pendor
                  </div>
                  <div className="text-gray-600">Cases: 85</div>
                  <div className="text-gray-600">Water Results: Safe</div>
                  <div className="text-gray-600">
                    Alerts: 2 (Malaria outbreak)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Alerts */}
          <div className="glass-card-bright rounded-2xl p-8 scroll-reveal-slide-right">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Recent Alerts
            </h2>
            <div className="space-y-2">
              <div className="flex items-start justify-between group p-2 rounded-lg hover:bg-blue-50/50 transition-colors cursor-pointer">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Fever outbreak in Khanpur
                  </p>
                </div>
                <span className="glass-bright text-blue-600 text-xs px-2 py-1 rounded-full font-medium border border-blue-200">
                  Pending
                </span>
              </div>
              <div className="flex items-start justify-between group p-2 rounded-lg hover:bg-blue-50/50 transition-colors cursor-pointer">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Contaminated well
                  </p>
                </div>
                <span className="glass-bright text-green-600 text-xs px-2 py-1 rounded-full font-medium border border-green-200">
                  Acknowledged
                </span>
              </div>
              <div className="flex items-start justify-between group p-2 rounded-lg hover:bg-blue-50/50 transition-colors cursor-pointer">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Diarrhea cases well in Ramtur Shanti Nagar
                  </p>
                </div>
                <span className="glass-bright text-orange-600 text-xs px-2 py-1 rounded-full font-medium border border-orange-200">
                  Review
                </span>
              </div>
              <div className="flex items-start justify-between group p-2 rounded-lg hover:bg-blue-50/50 transition-colors cursor-pointer">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Typhoid in Block C
                  </p>
                </div>
                <span className="glass-bright text-blue-600 text-xs px-2 py-1 rounded-full font-medium border border-blue-200">
                  Pending
                </span>
              </div>
              <div className="flex items-start justify-between group p-2 rounded-lg hover:bg-blue-50/50 transition-colors cursor-pointer">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    New vector-borne illness
                  </p>
                </div>
                <span className="glass-bright text-purple-600 text-xs px-2 py-1 rounded-full font-medium border border-purple-200">
                  Investigate
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Cases Chart */}
          <div className="glass-card-bright rounded-2xl p-6 scroll-reveal-scale">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Cases in last 7 days
            </h2>
            <div className="h-64 relative">
              <svg viewBox="0 0 300 200" className="w-full h-full">
                {/* Grid lines */}
                <defs>
                  <pattern
                    id="grid"
                    width="30"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 30 0 L 0 0 0 20"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />

                {/* Area chart */}
                <path
                  d="M 20 180 L 50 160 L 80 140 L 110 130 L 140 120 L 170 110 L 200 90 L 230 80 L 260 70 L 280 60 L 280 180 Z"
                  fill="url(#areaGradient)"
                />
                <path
                  d="M 20 180 L 50 160 L 80 140 L 110 130 L 140 120 L 170 110 L 200 90 L 230 80 L 260 70 L 280 60"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="2"
                />
                <g>
                  <circle cx="20" cy="180" r="3" fill="#3B82F6">
                    <title>Mon: 0</title>
                  </circle>
                  <circle cx="50" cy="160" r="3" fill="#3B82F6">
                    <title>Tue: 200</title>
                  </circle>
                  <circle cx="80" cy="140" r="3" fill="#3B82F6">
                    <title>Wed: 400</title>
                  </circle>
                  <circle cx="110" cy="130" r="3" fill="#3B82F6">
                    <title>Thu: 500</title>
                  </circle>
                  <circle cx="140" cy="120" r="3" fill="#3B82F6">
                    <title>Fri: 600</title>
                  </circle>
                  <circle cx="170" cy="110" r="3" fill="#3B82F6">
                    <title>Sat: 700</title>
                  </circle>
                  <circle cx="200" cy="90" r="3" fill="#3B82F6">
                    <title>Sun: 900</title>
                  </circle>
                  <circle cx="230" cy="80" r="3" fill="#3B82F6">
                    <title>Mon: 1000</title>
                  </circle>
                  <circle cx="260" cy="70" r="3" fill="#3B82F6">
                    <title>Tue: 1100</title>
                  </circle>
                  <circle cx="280" cy="60" r="3" fill="#3B82F6">
                    <title>Wed: 1200</title>
                  </circle>
                </g>

                {/* Gradient definition */}
                <defs>
                  <linearGradient
                    id="areaGradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                    <stop
                      offset="100%"
                      stopColor="#3B82F6"
                      stopOpacity="0.05"
                    />
                  </linearGradient>
                </defs>

                {/* Y-axis labels */}
                <text
                  x="15"
                  y="25"
                  fontSize="10"
                  fill="#6B7280"
                  textAnchor="end"
                >
                  1200
                </text>
                <text
                  x="15"
                  y="45"
                  fontSize="10"
                  fill="#6B7280"
                  textAnchor="end"
                >
                  1000
                </text>
                <text
                  x="15"
                  y="85"
                  fontSize="10"
                  fill="#6B7280"
                  textAnchor="end"
                >
                  600
                </text>
                <text
                  x="15"
                  y="125"
                  fontSize="10"
                  fill="#6B7280"
                  textAnchor="end"
                >
                  400
                </text>
                <text
                  x="15"
                  y="165"
                  fontSize="10"
                  fill="#6B7280"
                  textAnchor="end"
                >
                  200
                </text>
                <text
                  x="15"
                  y="185"
                  fontSize="10"
                  fill="#6B7280"
                  textAnchor="end"
                >
                  0
                </text>

                {/* X-axis labels */}
                <text
                  x="50"
                  y="195"
                  fontSize="10"
                  fill="#6B7280"
                  textAnchor="middle"
                >
                  Mon
                </text>
                <text
                  x="80"
                  y="195"
                  fontSize="10"
                  fill="#6B7280"
                  textAnchor="middle"
                >
                  Tue
                </text>
                <text
                  x="110"
                  y="195"
                  fontSize="10"
                  fill="#6B7280"
                  textAnchor="middle"
                >
                  Wed
                </text>
                <text
                  x="140"
                  y="195"
                  fontSize="10"
                  fill="#6B7280"
                  textAnchor="middle"
                >
                  Thu
                </text>
                <text
                  x="170"
                  y="195"
                  fontSize="10"
                  fill="#6B7280"
                  textAnchor="middle"
                >
                  Fri
                </text>
                <text
                  x="200"
                  y="195"
                  fontSize="10"
                  fill="#6B7280"
                  textAnchor="middle"
                >
                  Sat
                </text>
                <text
                  x="230"
                  y="195"
                  fontSize="10"
                  fill="#6B7280"
                  textAnchor="middle"
                >
                  Sun
                </text>
              </svg>
            </div>
          </div>

          {/* Disease Distribution Chart */}
          <div className="glass-card-bright rounded-2xl p-6 scroll-reveal-scale">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Disease Distribution
            </h2>
            <div className="md:h-64">
              <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
                <svg
                  width="220"
                  height="220"
                  viewBox="0 0 200 200"
                  className="shrink-0"
                >
                  {/* Donut chart segments */}
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth={activeSegment === "yellow" ? 28 : 25}
                    strokeDasharray="50 100"
                    strokeDashoffset="0"
                    transform="rotate(-90 100 100)"
                    style={{
                      opacity:
                        activeSegment && activeSegment !== "yellow"
                          ? 0.35
                          : 0.9,
                      transition: "opacity .2s, stroke-width .2s",
                    }}
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#22C55E"
                    strokeWidth={activeSegment === "green" ? 28 : 25}
                    strokeDasharray="37.5 100"
                    strokeDashoffset="-50"
                    transform="rotate(-90 100 100)"
                    style={{
                      opacity:
                        activeSegment && activeSegment !== "green" ? 0.35 : 0.9,
                      transition: "opacity .2s, stroke-width .2s",
                    }}
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth={activeSegment === "blue" ? 28 : 25}
                    strokeDasharray="50 100"
                    strokeDashoffset="-87.5"
                    transform="rotate(-90 100 100)"
                    style={{
                      opacity:
                        activeSegment && activeSegment !== "blue" ? 0.35 : 0.9,
                      transition: "opacity .2s, stroke-width .2s",
                    }}
                  />
                  <text
                    x="100"
                    y="105"
                    textAnchor="middle"
                    className="fill-gray-700 text-sm"
                  >
                    Cases
                  </text>
                </svg>
                {/* Legend - non-overlapping */}
                <div className="mt-6 md:mt-0 grid grid-cols-1 gap-3 text-sm w-full">
                  <button
                    type="button"
                    onMouseEnter={() => setActiveSegment("yellow")}
                    onMouseLeave={() => setActiveSegment(null)}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-yellow-50/60 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                      <span className="text-gray-700">Diarrheal Typhoid</span>
                    </span>
                    <span className="text-gray-500">20%</span>
                  </button>
                  <button
                    type="button"
                    onMouseEnter={() => setActiveSegment("green")}
                    onMouseLeave={() => setActiveSegment(null)}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-emerald-50/60 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-green-500"></span>
                      <span className="text-gray-700">Malaria</span>
                    </span>
                    <span className="text-gray-500">15%</span>
                  </button>
                  <button
                    type="button"
                    onMouseEnter={() => setActiveSegment("blue")}
                    onMouseLeave={() => setActiveSegment(null)}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-blue-50/60 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                      <span className="text-gray-700">Other</span>
                    </span>
                    <span className="text-gray-500">20%</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
