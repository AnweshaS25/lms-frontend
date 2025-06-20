import '../styles/tailwind.css'; // Make sure this path is correct
import type { Metadata } from 'next';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'My LMS',
  description: 'A learning platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen font-sans">
        {/* Top Header */}
        <Header />

        {/* Content Area: Sidebar + Main */}
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-4 bg-white">{children}</main>
        </div>

        {/* Bottom Footer */}
        <Footer />
      </body>
    </html>
  );
}
