import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-gray-800 bg-opacity-90 backdrop-blur-md py-4">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">Kieran Kinnaird</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:text-gray-400 transition">Home</Link>
          <Link to="/portfolio" className="hover:text-gray-400 transition">Portfolio</Link>
        </div>
      </div>
    </nav>
  );
}