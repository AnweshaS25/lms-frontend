export default function Sidebar() {
  return (
    <aside className="hidden lg:block w-64 bg-gray-100 p-4">
      <ul className="space-y-2">
        <li>
          <a href="#" className="block p-2 hover:bg-gray-200">
            Overview
          </a>
        </li>
        <li>
          <a href="#" className="block p-2 hover:bg-gray-200">
            My Courses
          </a>
        </li>
        <li>
          <a href="#" className="block p-2 hover:bg-gray-200">
            Settings
          </a>
        </li>
      </ul>
    </aside>
  );
}
