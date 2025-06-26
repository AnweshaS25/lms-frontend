'use client';
export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-3 shadow-inner">
      © {new Date().getFullYear()} LMS
    </footer>
  );
}

