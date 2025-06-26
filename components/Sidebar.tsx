'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar({ open }: { open: boolean }) {
  const pathname = usePathname();
  const items = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/courses', label: 'Courses' },
    { href: '/profile', label: 'Profile' },
  ];

  return (
    <aside className={`
      fixed inset-y-0 left-0 bg-gray-900 text-white w-48 transition-transform duration-200 z-10
      ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static
    `}>
      <div className="mt-12 space-y-2">
        {items.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`block px-4 py-2 hover:bg-gray-700 ${pathname === href ? 'bg-gray-700 font-semibold' : ''}`}
          >
            {label}
          </Link>
        ))}
      </div>
    </aside>
  );
}
