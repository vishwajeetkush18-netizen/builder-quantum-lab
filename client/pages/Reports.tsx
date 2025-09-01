import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Users, Droplet, AlertTriangle, TrendingUp, CloudUpload, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import InteractiveLogo from "@/components/ui/interactive-logo";
import KPIStat from "@/components/ui/kpi-card";
import SiteFooter from "@/components/ui/site-footer";

export default function Reports() {
  const [selectedDisease, setSelectedDisease] = useState("");
  const [selectedVillage, setSelectedVillage] = useState("");
  const [startDate, setStartDate] = useState("");
  const [selected, setSelected] = useState<{ health?: number; water?: number } | null>(null);

  const healthReports = [
    { patientId: "Eoype", age: 75, io: 85, symptoms: "70.00", date: "500%" },
    { patientId: "Mar", age: 60, io: 41, symptoms: "75.00", date: "400%" },
    { patientId: "Symptoms", age: 50, io: 32, symptoms: "90.00", date: "200%" },
    { patientId: "Xi", age: 50, io: 58, symptoms: "80.00", date: "200%" },
    { patientId: "XX", age: 50, io: 54, symptoms: "70.00", date: "400%" },
    { patientId: "X", age: 56, io: 51, symptoms: "60.00", date: "200%" },
  ];

  const waterTestReports = [
    { sourceLocation: "Sourcel", turbidity: 15.000, ph: 60, tubritate: "Contamination Flag", date: "200%" },
    { sourceLocation: "pH", turbidity: 15.000, ph: 7, tubritate: "102200%", date: "200%" },
    { sourceLocation: "Typsoid", turbidity: 15.000, ph: 5, tubritate: "30000%", date: "600%" },
    { sourceLocation: "Tyh", turbidity: 15.000, ph: 5, tubritate: "50220%", date: "100%" },
    { sourceLocation: "Malaria", turbidity: 15.000, ph: 56, tubritate: "60020%", date: "100%" },
    { sourceLocation: "Tns", turbidity: 15.000, ph: 50, tubritate: "50220%", date: "200%" },
    { sourceLocation: "Malaria", turbidity: 25.000, ph: 45, tubritate: "50000%", date: "200%" },
    { sourceLocation: "Thy", turbidity: 26.000, ph: 10, tubritate: "50000%", date: "200%" },
    { sourceLocation: "Other", turbidity: 45.000, ph: 101, tubritate: "60020%", date: "400%" },
    { sourceLocation: "Other", turbidity: 49.000, ph: 71, tubritate: "50220%", date: "200%" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
      {/* Header */}
      <header className="glass-header-bright px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <InteractiveLogo />
              <span className="text-lg font-semibold text-gray-900">Health Surveillance</span>
            </div>
            <nav className="flex space-x-8">
              <Link to="/dashboard" className="text-gray-600 hover:text-blue-600 transition-colors">Dashboard</Link>
              <Link to="/reports" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">Reports</Link>
              <Link to="/alerts" className="text-gray-600 hover:text-blue-600 transition-colors">Alerts</Link>
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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          <KPIStat label="Total cases reported today" value={"2,5000"} icon={<Users className="w-7 h-7 text-white" />} accent="blue" />
          <KPIStat label="Water sources tested" value={"350"} icon={<Droplet className="w-7 h-7 text-white" />} accent="green" />
          <KPIStat label="Active alerts" value={"15"} icon={<AlertTriangle className="w-7 h-7 text-white" />} accent="orange" />
          <KPIStat label="Villages at High Risk" value={"6"} icon={<TrendingUp className="w-7 h-7 text-gray-700" />} accent="purple" />
        </div>

        {/* Reports Section */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Main Reports Area */}
          <div className="xl:col-span-3 space-y-6">
            {/* Health Reports */}
            <div className="glass-card-bright rounded-2xl p-6 scroll-reveal">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Health Reports</h2>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Patient ID</TableHead>
                      <TableHead>Age</TableHead>
                      <TableHead>Io</TableHead>
                      <TableHead>Symptoms</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {healthReports.map((report, index) => (
                      <TableRow
                        key={index}
                        className="group"
                        data-state={(selected as any)?.health === index ? "selected" : undefined}
                        onClick={() => setSelected((s:any) => ({ ...(s||{}), health: index }))}
                      >
                        <TableCell className="font-medium group-hover:font-semibold">{report.patientId}</TableCell>
                        <TableCell>{report.age}</TableCell>
                        <TableCell>{report.io}</TableCell>
                        <TableCell>
                          <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded-md text-xs font-medium">{report.symptoms}</span>
                        </TableCell>
                        <TableCell className="text-gray-500">{report.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Water Test Reports */}
            <div className="glass-card-bright rounded-2xl p-6 scroll-reveal">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Water Test Reports</h2>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Source Location</TableHead>
                      <TableHead>Turbidly</TableHead>
                      <TableHead>pH</TableHead>
                      <TableHead>Tubritate Marid clogs</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {waterTestReports.map((report, index) => (
                      <TableRow
                        key={index}
                        className="group"
                        data-state={selected?.water === index ? "selected" : undefined}
                        onClick={() => setSelected((s) => ({ ...(s || {}), water: index }))}
                      >
                        <TableCell className="font-medium group-hover:font-semibold">{report.sourceLocation}</TableCell>
                        <TableCell>
                          <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-md text-xs font-medium">{report.turbidity}</span>
                        </TableCell>
                        <TableCell>{report.ph}</TableCell>
                        <TableCell>
                          <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-md text-xs font-medium">{report.tubritate}</span>
                        </TableCell>
                        <TableCell className="text-gray-500">{report.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Filters */}
            <div className="glass-card-bright rounded-2xl p-6 scroll-reveal">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-2">Disease</label>
                  <Select value={selectedDisease} onValueChange={setSelectedDisease}>
                    <SelectTrigger className="bg-white/70 backdrop-blur-sm border-white/30">
                      <SelectValue placeholder="Disease" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="malaria">Malaria</SelectItem>
                      <SelectItem value="typhoid">Typhoid</SelectItem>
                      <SelectItem value="diarrhea">Diarrhea</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-2">Village</label>
                  <Select value={selectedVillage} onValueChange={setSelectedVillage}>
                    <SelectTrigger className="bg-white/70 backdrop-blur-sm border-white/30">
                      <SelectValue placeholder="Village" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="khanpur">Khanpur</SelectItem>
                      <SelectItem value="pendor">Pendor</SelectItem>
                      <SelectItem value="ramtur">Ramtur Shanti Nagar</SelectItem>
                      <SelectItem value="block-c">Block C</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-2">Village</label>
                  <Select>
                    <SelectTrigger className="bg-white/70 backdrop-blur-sm border-white/30">
                      <SelectValue placeholder="Village" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="village1">Village 1</SelectItem>
                      <SelectItem value="village2">Village 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-2">Start Date</label>
                  <Input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="bg-white/70 backdrop-blur-sm border-white/30"
                  />
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Apply Filters
                </Button>
              </div>
            </div>

            {/* Bulk Upload */}
            <div className="glass-card-bright rounded-2xl p-6 scroll-reveal">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Bulk Upload</h2>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <CloudUpload className="w-10 h-10 text-blue-600" />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Upload CSV/Excel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
