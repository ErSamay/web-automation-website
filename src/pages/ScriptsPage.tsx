// components/ScriptsPage.tsx
import { useState } from "react";
import type { Script } from '../types/Script';
import { mockScripts } from '../utils/constants';
import { updateScriptStatus } from '../utils/automation';

const ScriptsPage = () => {
  const [scripts, setScripts] = useState<Script[]>(mockScripts);

  const handleStatusUpdate = (scriptId: string, status: Script['status']) => {
    const updatedScripts = updateScriptStatus(scripts, scriptId, status);
    setScripts(updatedScripts);
  };

  const handleDeleteScript = (scriptId: string) => {
    const filteredScripts = scripts.filter(script => script.id !== scriptId);
    setScripts(filteredScripts);
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Scripts Manager</h2>
        <p className="text-gray-600">Manage your automation scripts</p>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">All Scripts</h3>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
              Create New Script
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Name</th>
                  <th className="text-left py-3 px-4">Website</th>
                  <th className="text-left py-3 px-4">Steps</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Last Run</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {scripts.map((script) => (
                  <tr key={script.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{script.name}</td>
                    <td className="py-3 px-4">{script.website}</td>
                    <td className="py-3 px-4">{script.steps.length} steps</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        script.status === 'active' ? 'bg-green-100 text-green-700' :
                        script.status === 'draft' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {script.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      {script.lastRun ? script.lastRun.toLocaleDateString() : 'Never'}
                    </td>
                    <td className="py-3 px-4">
                      <button 
                        className="text-blue-600 hover:text-blue-800 mr-3"
                        onClick={() => handleStatusUpdate(script.id, 'active')}
                      >
                        Edit
                      </button>
                      <button 
                        className="text-red-600 hover:text-red-800"
                        onClick={() => handleDeleteScript(script.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScriptsPage;