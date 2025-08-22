import { Play, Settings, BarChart3, Home, Code } from 'lucide-react';

const Sidebar = ({ currentPage, onPageChange }: { currentPage: string; onPageChange: (page: string) => void }) => {
  const menuItems = [
    { id: 'home', icon: Home, label: 'Dashboard' },
    { id: 'automation', icon: Play, label: 'Automation' },
    { id: 'scripts', icon: Code, label: 'Scripts' },
    { id: 'analytics', icon: BarChart3, label: 'Analytics' },
    { id: 'settings', icon: Settings, label: 'Settings' }
  ];

  return (
    <aside className="w-64 bg-gray-50 min-h-screen border-r border-gray-200">
      <nav className="mt-8">
        <div className="px-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => onPageChange(item.id)}
                    className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      currentPage === item.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="mr-3 h-5 w-5" />
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </aside>
  );
};


export default Sidebar;