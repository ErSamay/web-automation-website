import {  Code } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Code className="h-8 w-8 text-blue-600" />
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-semibold text-gray-900">AutoBot Pro</h1>
              <p className="text-sm text-gray-500">Web Automation Platform</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
              New Script
            </button>
            <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
