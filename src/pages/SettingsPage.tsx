const SettingsPage = () => {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
        <p className="text-gray-600">Configure your automation preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">General Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Default Timeout (seconds)
                </label>
                <input
                  type="number"
                  defaultValue="30"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Retry Attempts
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-lg">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="headless" className="mr-2" />
                <label htmlFor="headless" className="text-sm text-gray-700">
                  Run in headless mode
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Notification Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Script completion notifications</span>
                <input type="checkbox" defaultChecked className="toggle" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Error notifications</span>
                <input type="checkbox" defaultChecked className="toggle" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Daily summary</span>
                <input type="checkbox" className="toggle" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;