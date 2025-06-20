export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">My LMS</div>
      <nav className="space-x-4">
        <a href="#" className="hover:underline">
          Dashboard
        </a>
        <a href="#" className="hover:underline">
          Courses
        </a>
        <a href="#" className="hover:underline">
          Profile
        </a>
      </nav>
    </header>
  );
}
