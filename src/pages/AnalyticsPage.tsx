const AnalyticsPage = () => {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Analytics</h2>
        <p className="text-gray-600">Performance metrics and insights</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Total Executions</h3>
          <p className="text-3xl font-bold text-gray-900">1,247</p>
          <p className="text-sm text-green-600">+12% from last week</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Success Rate</h3>
          <p className="text-3xl font-bold text-gray-900">94.2%</p>
          <p className="text-sm text-green-600">+2.1% improvement</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Avg Duration</h3>
          <p className="text-3xl font-bold text-gray-900">45s</p>
          <p className="text-sm text-red-600">+5s from last week</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Active Scripts</h3>
          <p className="text-3xl font-bold text-gray-900">12</p>
          <p className="text-sm text-blue-600">2 new this week</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Execution Trends</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <p className="text-gray-500">Chart visualization would be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;