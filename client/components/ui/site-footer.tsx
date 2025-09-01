export default function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-gray-200 bg-white/70 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between">
        <div className="font-medium text-gray-700">© 2025 Health Surveillance</div>
        <nav className="mt-3 md:mt-0 flex items-center gap-6">
          <a className="hover:text-blue-600 transition-colors" href="#">Privacy</a>
          <a className="hover:text-blue-600 transition-colors" href="#">Terms</a>
          <a className="hover:text-blue-600 transition-colors" href="#">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
