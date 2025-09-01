import { Link } from "react-router-dom";
import { Shield, User, Users, Droplet, AlertTriangle, TrendingUp, Bell, Clock, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Alerts() {
  const alerts = [
    {
      id: 1,
      title: "Fever outbreak in Khanpur",
      status: "pending",
      priority: "high",
      time: "2 hours ago",
      description: "Multiple cases of high fever reported in Khanpur village",
      village: "Khanpur"
    },
    {
      id: 2,
      title: "Contaminated well",
      status: "acknowledged",
      priority: "medium",
      time: "5 hours ago",
      description: "Water contamination detected in well #47",
      village: "Pendor"
    },
    {
      id: 3,
      title: "Diarrhea cases well in Ramtur Shanti Nagar",
      status: "pending",
      priority: "medium",
      time: "1 day ago",
      description: "Increase in diarrhea cases reported",
      village: "Ramtur Shanti Nagar"
    },
    {
      id: 4,
      title: "Typhoid in Block C",
      status: "pending",
      priority: "high",
      time: "2 days ago",
      description: "Confirmed typhoid cases in Block C residential area",
      village: "Block C"
    },
    {
      id: 5,
      title: "New vector-borne illness",
      status: "resolved",
      priority: "low",
      time: "3 days ago",
      description: "Investigation completed, no further action needed",
      village: "Sector 15"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <span className="glass text-blue-600 text-xs px-2 py-1 rounded-full font-medium">Pending</span>;
      case 'acknowledged':
        return <span className="glass text-green-600 text-xs px-2 py-1 rounded-full font-medium">Acknowledged</span>;
      case 'resolved':
        return <span className="glass text-gray-600 text-xs px-2 py-1 rounded-full font-medium">Resolved</span>;
      default:
        return <span className="glass text-gray-600 text-xs px-2 py-1 rounded-full font-medium">Unknown</span>;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-600';
      case 'medium':
        return 'text-yellow-600';
      case 'low':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-teal-100">
      {/* Header */}
      <header className="glass-header px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Link
                to="/dashboard"
                className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-blue-700 hover:scale-110 hover:shadow-lg cursor-pointer"
                title="Health Surveillance"
              >
                <Shield className="w-6 h-6 text-white transition-transform duration-200 hover:rotate-12" />
              </Link>
              <span className="text-lg font-semibold text-gray-900">Health Surveillance</span>
            </div>
            <nav className="flex space-x-8">
              <Link to="/dashboard" className="text-gray-600 hover:text-blue-600 transition-colors">Dashboard</Link>
              <Link to="/reports" className="text-gray-600 hover:text-blue-600 transition-colors">Reports</Link>
              <Link to="/alerts" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">Alerts</Link>
              <Link to="/settings" className="text-gray-600 hover:text-blue-600 transition-colors">Settings</Link>
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
                <p className="text-3xl font-bold text-gray-900 mt-2">1,200</p>
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
                <p className="text-3xl font-bold text-gray-900 mt-2">5</p>
              </div>
              <div className="w-12 h-12 glass rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Alerts Section */}
        <div className="glass-card rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <Bell className="w-6 h-6 mr-2 text-yellow-600" />
              Alert Management
            </h2>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                Mark All Read
              </Button>
              <Button size="sm">
                Create Alert
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {alerts.map((alert) => (
              <div key={alert.id} className="glass rounded-xl p-4 border border-white/30">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold text-gray-900">{alert.title}</h3>
                      <span className={`text-xs font-medium ${getPriorityColor(alert.priority)}`}>
                        {alert.priority.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{alert.description}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {alert.time}
                      </span>
                      <span>{alert.village}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 ml-4">
                    {getStatusBadge(alert.status)}
                    
                    <div className="flex space-x-1">
                      {alert.status === 'pending' && (
                        <>
                          <Button size="sm" variant="outline" className="w-8 h-8 p-0">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          </Button>
                          <Button size="sm" variant="outline" className="w-8 h-8 p-0">
                            <XCircle className="w-4 h-4 text-red-600" />
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
