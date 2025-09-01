import { Link } from "react-router-dom";
import { User, Users, Droplet, AlertTriangle, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import InteractiveLogo from "@/components/ui/interactive-logo";

export default function Alerts() {
  const outbreakAlerts = [
    { village: "Khanpur", suspectedDisease: "35", waterQuality: "20.00", date: "500%" },
    { village: "Diarrhea", suspectedDisease: "35", waterQuality: "75.00", date: "400%" },
    { village: "Ramtr Shanti Nagar", suspectedDisease: "120", waterQuality: "Unsafe", date: "400%" },
    { village: "Lian", suspectedDisease: "120", waterQuality: "80.00", date: "200%" },
    { village: "Siploek X", suspectedDisease: "80", waterQuality: "80.00", date: "400%" },
    { village: "Typhoid C", suspectedDisease: "80", waterQuality: "60.00", date: "200%" },
    { village: "XX", suspectedDisease: "80", waterQuality: "60.00", date: "200%" },
    { village: "Malaria", suspectedDisease: "56", waterQuality: "80.00", date: "200%" },
  ];

  const waterQualityData = [
    { village: "Diarrheid", age: "31", no: "30", waterQuality: "70.00", date: "500%" },
    { village: "Tyh", age: "60", no: "23", waterQuality: "55.00", date: "500%" },
    { village: "Thy", age: "60", no: "39", waterQuality: "60.00", date: "200%" },
    { village: "Otse", age: "50", no: "88", waterQuality: "70.00", date: "200%" },
    { village: "Other", age: "50", no: "89", waterQuality: "80.00", date: "200%" },
  ];

  const alertHistory = [
    { date: "2023-10-22", status: "Pending", detail: "" },
    { date: "", status: "", detail: "Centri Santinmeli (Malaria)" },
    { date: "", status: "", detail: "Well Acknowledged" },
    { date: "", status: "Acknowledged", detail: "Disease" },
    { date: "", status: "Pending", detail: "Aetr Filrarts" },
    { date: "", status: "Resolved", detail: "Contaminated Well" },
    { date: "", status: "Resolved", detail: "Fever Spike" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-teal-100">
      {/* Header */}
      <header className="glass-header px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <InteractiveLogo />
              <span className="text-lg font-semibold text-gray-900">Health Surveillance</span>
            </div>
            <nav className="flex space-x-8">
              <Link to="/dashboard" className="text-gray-600 hover:text-blue-600 transition-colors">Dashboard</Link>
              <Link to="/reports" className="text-gray-600 hover:text-blue-600 transition-colors">Reports</Link>
              <span className="bg-green-400 text-white px-3 py-1 rounded-md font-medium">Alerts</span>
              <Link to="/ai-risk" className="text-gray-600 hover:text-blue-600 transition-colors">AI Risk</Link>
            </nav>
          </div>
          <Link
            to="/profile"
            className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-blue-700 hover:scale-110 hover:shadow-lg cursor-pointer"
            title="User Profile"
          >
            <User className="w-6 h-6 text-white transition-transform duration-200 hover:scale-110" />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 space-y-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="glass-card rounded-2xl p-6 scroll-reveal">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total cases reported today</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">3,2000</p>
              </div>
              <div className="w-12 h-12 glass rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 scroll-reveal">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Water sources tested</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">350</p>
              </div>
              <div className="w-12 h-12 glass rounded-xl flex items-center justify-center">
                <Droplet className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 scroll-reveal">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Active alerts</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">15</p>
              </div>
              <div className="w-12 h-12 glass rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 scroll-reveal">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Villages at High Risk</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">8</p>
              </div>
              <div className="w-12 h-12 glass rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Outbreak Alerts Table */}
          <div className="xl:col-span-3 glass-card rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Outbreak Alerts</h2>
            
            <div className="overflow-x-auto mb-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Village</TableHead>
                    <TableHead>Suspected Disease</TableHead>
                    <TableHead>Water Quality</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {outbreakAlerts.map((alert, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{alert.village}</TableCell>
                      <TableCell>{alert.suspectedDisease}</TableCell>
                      <TableCell className={alert.waterQuality === "Unsafe" ? "text-red-600 font-medium" : ""}>
                        {alert.waterQuality}
                      </TableCell>
                      <TableCell>{alert.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3 mb-4">
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                ✓ Acknowledge
              </Button>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                ↑ Escalate
              </Button>
            </div>

            {/* Water Quality Section */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Water Quality</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Village</TableHead>
                      <TableHead>Age</TableHead>
                      <TableHead>No</TableHead>
                      <TableHead>No.2 Quality</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {waterQualityData.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.village}</TableCell>
                        <TableCell>{item.age}</TableCell>
                        <TableCell>{item.no}</TableCell>
                        <TableCell>{item.waterQuality}</TableCell>
                        <TableCell>{item.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    ⋮
                  </Button>
                </div>
                <span className="text-sm text-gray-500">Show...</span>
              </div>
            </div>
          </div>

          {/* Alert History Sidebar */}
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Alert History</h2>
            
            <div className="space-y-3">
              {alertHistory.map((item, index) => (
                <div key={index} className="space-y-1">
                  {item.date && (
                    <div className="text-sm text-gray-600">{item.date}</div>
                  )}
                  {item.status && (
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        item.status === 'Pending' ? 'bg-blue-100 text-blue-800' :
                        item.status === 'Acknowledged' ? 'bg-green-100 text-green-800' :
                        item.status === 'Resolved' ? 'bg-gray-100 text-gray-800' : ''
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  )}
                  {item.detail && (
                    <div className="text-sm text-gray-800 ml-2">{item.detail}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
