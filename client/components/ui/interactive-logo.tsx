import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

export function InteractiveLogo() {
  return (
    <Link
      to="/dashboard"
      className="group relative inline-flex items-center justify-center w-10 h-10 rounded-lg overflow-hidden"
      title="SwasthyaSetu"
    >
      <span className="absolute inset-0 rounded-lg bg-gradient-to-tr from-blue-500 via-cyan-400 to-violet-500 opacity-80 group-hover:opacity-100 transition-opacity" />
      <span className="absolute -inset-1 rounded-lg blur-md bg-gradient-to-tr from-blue-500 via-cyan-400 to-violet-500 opacity-30 group-hover:opacity-60 transition-opacity" />
      <span className="relative z-10 grid place-items-center w-full h-full text-white">
        <Shield className="w-6 h-6 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
      </span>
    </Link>
  );
}

export default InteractiveLogo;
