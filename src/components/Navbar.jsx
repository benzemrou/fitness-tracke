import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white shadow-lg flex justify-between">
      <div className="font-bold text-xl">FitTrack</div>
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-200">Home</Link>
        <Link to="/nutrition" className="hover:text-blue-200">Food</Link>
        <Link to="/workout" className="hover:text-blue-200">Sports</Link>
      </div>
    </nav>
  );
}