'use client';
import Link from 'next/link';

export default function Header({ toggleSidebar }: { toggleSidebar: () => void }) {
  return (
    <header className="fixed top-0 inset-x-0 h-12 bg-purple-600 text-white flex items-center px-4 shadow-md z-20">
      <button className="md:hidden mr-4" onClick={toggleSidebar} aria-label="Toggle sidebar">☰</button>
      <div className="flex-1 font-bold">LMS</div>
      <nav className="hidden md:flex space-x-6">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/profile">Profile</Link>
      </nav>
    </header>
  );
}
