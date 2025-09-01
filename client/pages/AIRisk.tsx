import { Link } from "react-router-dom";
import { AlertTriangle, Droplet, LineChart, Shield, TrendingUp, User } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function AIRisk() {
  const aiRiskRows = [
    { village: "Khandur", cases: 35, water: "20.00", risk: "High" },
    { village: "Diarrhea", cases: 35, water: "75.00", risk: "Medium" },
    { village: "Ramtr Shanti Nagar", cases: 120, water: "Unsafe", risk: "Critical" },
    { village: "Ujan", cases: 21, water: "80.00", risk: "Medium" },
    { village: "Typhoid C", cases: 56, water: "60.00", risk: "High" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
      {/* Header */}
      <header className="glass-header-bright px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Link
                to="/dashboard"
                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-blue-700 hover:scale-110 hover:shadow-lg"
                title="Health Surveillance"
              >
                <Shield className="w-6 h-6 text-white transition-transform duration-200 hover:rotate-12" />
              </Link>
              <span className="text-lg font-semibold text-gray-900">Health Surveillance</span>
            </div>
            <nav className="flex space-x-8">
              <Link to="/dashboard" className="text-gray-600 hover:text-blue-600 transition-colors">Dashboard</Link>
              <Link to="/reports" className="text-gray-600 hover:text-blue-600 transition-colors">Reports</Link>
              <Link to="/alerts" className="text-gray-600 hover:text-blue-600 transition-colors">Alerts</Link>
              <span className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">AI Risk</span>
            </nav>
          </div>
          <Link
            to="/profile"
            className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-blue-700 hover:scale-110 hover:shadow-lg"
            title="User Profile"
          >
            <User className="w-6 h-6 text-white transition-transform duration-200 hover:scale-110" />
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="p-8 space-y-8">
        {/* KPI */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          <div className="glass-card-bright rounded-2xl p-8 scroll-reveal kpi-card-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 accent-blue rounded-full opacity-10 transform translate-x-6 -translate-y-6"></div>
            <div className="flex items-start justify-between relative z-10">
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">Total cases reported today</p>
                <p className="text-4xl font-bold text-gray-900 mt-3">3,500</p>
              </div>
              <div className="w-14 h-14 accent-blue rounded-xl flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
            </div>
          </div>

          <div className="glass-card-bright rounded-2xl p-8 scroll-reveal kpi-card-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 accent-green rounded-full opacity-10 transform translate-x-6 -translate-y-6"></div>
            <div className="flex items-start justify-between relative z-10">
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">Water sources tested</p>
                <p className="text-4xl font-bold text-gray-900 mt-3">550</p>
              </div>
              <div className="w-14 h-14 accent-green rounded-xl flex items-center justify-center">
                <Droplet className="w-7 h-7 text-white" />
              </div>
            </div>
          </div>

          <div className="glass-card-bright rounded-2xl p-8 scroll-reveal kpi-card-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 accent-orange rounded-full opacity-10 transform translate-x-6 -translate-y-6"></div>
            <div className="flex items-start justify-between relative z-10">
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">Active alerts</p>
                <p className="text-4xl font-bold text-gray-900 mt-3">10</p>
              </div>
              <div className="w-14 h-14 accent-orange rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-7 h-7 text-white" />
              </div>
            </div>
          </div>

          <div className="glass-card-bright rounded-2xl p-8 scroll-reveal kpi-card-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 accent-purple rounded-full opacity-10 transform translate-x-6 -translate-y-6"></div>
            <div className="flex items-start justify-between relative z-10">
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">Villages at High Risk</p>
                <p className="text-4xl font-bold text-gray-900 mt-3">7</p>
              </div>
              <div className="w-14 h-14 accent-purple rounded-xl flex items-center justify-center">
                <LineChart className="w-7 h-7 text-gray-700" />
              </div>
            </div>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* AI Risk Table */}
          <div className="xl:col-span-2 glass-card-bright rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">AI Risk Score by Village</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Village</TableHead>
                    <TableHead>Cases Reported</TableHead>
                    <TableHead>Water Quality</TableHead>
                    <TableHead>Risk Level</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {aiRiskRows.map((r, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{r.village}</TableCell>
                      <TableCell>{r.cases}</TableCell>
                      <TableCell className={r.water === "Unsafe" ? "text-red-600 font-medium" : ""}>{r.water}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          r.risk === "Critical" ? "bg-red-100 text-red-800" :
                          r.risk === "High" ? "bg-orange-100 text-orange-800" :
                          r.risk === "Medium" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"
                        }`}>{r.risk}</span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Prediction & Simulation */}
          <div className="glass-card-bright rounded-2xl p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Predicted Case Rise (Next 7 Days)</h2>
            <div className="h-56 mb-6">
              <svg viewBox="0 0 300 200" className="w-full h-full">
                <defs>
                  <pattern id="grid2" width="30" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 20" fill="none" stroke="#E5E7EB" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid2)" />
                <path d="M 20 150 L 60 140 L 100 130 L 140 110 L 180 90 L 220 95 L 260 80" fill="none" stroke="#3B82F6" strokeWidth="2" />
                <path d="M 20 155 L 60 145 L 100 135 L 140 120 L 180 100 L 220 105 L 260 90" fill="none" stroke="#22C55E" strokeWidth="2" />
              </svg>
            </div>
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700">Scenario Simulation</label>
              <div className="flex items-center space-x-3">
                <select className="px-3 py-2 border border-gray-300 rounded-lg bg-white/80 backdrop-blur-sm">
                  <option>Increase Rainfall by:</option>
                  <option>+5%</option>
                  <option>+10%</option>
                  <option>+20%</option>
                </select>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Recalculate Risk</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
