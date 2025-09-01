import { Mail, Phone, MapPin, Github, Twitter } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="mt-14 border-t border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-12 text-sm text-gray-600 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="text-xl font-semibold text-gray-900">Health Surveillance</div>
          <p className="mt-3 leading-6">AI-assisted monitoring for outbreaks, water quality, and village risk prediction.</p>
          <div className="flex items-center gap-3 mt-4">
            <a aria-label="GitHub" className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors" href="#"><Github className="w-4 h-4"/></a>
            <a aria-label="Twitter" className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors" href="#"><Twitter className="w-4 h-4"/></a>
          </div>
        </div>
        <nav>
          <div className="text-gray-900 font-medium">Quick Links</div>
          <ul className="mt-3 space-y-2">
            <li><a className="hover:text-blue-600 transition-colors" href="/dashboard">Dashboard</a></li>
            <li><a className="hover:text-blue-600 transition-colors" href="/reports">Reports</a></li>
            <li><a className="hover:text-blue-600 transition-colors" href="/alerts">Alerts</a></li>
            <li><a className="hover:text-blue-600 transition-colors" href="/ai-risk">AI Risk</a></li>
          </ul>
        </nav>
        <div>
          <div className="text-gray-900 font-medium">Resources</div>
          <ul className="mt-3 space-y-2">
            <li><a className="hover:text-blue-600 transition-colors" href="#">API</a></li>
            <li><a className="hover:text-blue-600 transition-colors" href="#">Docs</a></li>
            <li><a className="hover:text-blue-600 transition-colors" href="#">Changelog</a></li>
            <li><a className="hover:text-blue-600 transition-colors" href="#">Support</a></li>
          </ul>
        </div>
        <div>
          <div className="text-gray-900 font-medium">Contact</div>
          <ul className="mt-3 space-y-2">
            <li className="flex items-center gap-2"><Mail className="w-4 h-4"/> support@healthsurv.app</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4"/> +1 (555) 123-4567</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4"/> New Delhi, IN</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-gray-500 flex flex-col md:flex-row items-center justify-between">
          <div>© 2025 Health Surveillance. All rights reserved.</div>
          <div className="flex items-center gap-6 mt-3 md:mt-0">
            <a className="hover:text-blue-600 transition-colors" href="#">Privacy</a>
            <a className="hover:text-blue-600 transition-colors" href="#">Terms</a>
            <a className="hover:text-blue-600 transition-colors" href="#">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
