import { Play, BarChart3, Code } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
        <p className="text-gray-600">Overview of your automation activities</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Code className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">12</h3>
              <p className="text-gray-600">Active Scripts</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <Play className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">248</h3>
              <p className="text-gray-600">Executions Today</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <BarChart3 className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">94.2%</h3>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b">
              <div>
                <p className="font-medium">Amazon Product Search</p>
                <p className="text-sm text-gray-500">Completed successfully</p>
              </div>
              <span className="text-green-600 text-sm">2 min ago</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b">
              <div>
                <p className="font-medium">GitHub Repository Search</p>
                <p className="text-sm text-gray-500">In progress</p>
              </div>
              <span className="text-blue-600 text-sm">5 min ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;