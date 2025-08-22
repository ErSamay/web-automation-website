// components/AutomationPage.tsx
import { useState } from "react";
import { Play, Square } from 'lucide-react';
import type { Script } from '../types/Script';
import { mockScripts } from '../utils/constants';
import { runAutomationScript, getScriptById } from '../utils/automation';

const AutomationPage = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [selectedScript, setSelectedScript] = useState<Script | null>(null);
  const [logs, setLogs] = useState<string[]>([
    'AutoBot Pro v1.0 - Web Automation Tool',
    'Waiting for script selection...'
  ]);

  const handleScriptSelection = (scriptId: string) => {
    const script = getScriptById(mockScripts, scriptId);
    setSelectedScript(script || null);
    
    if (script) {
      setLogs(prev => [...prev, `Script selected: ${script.name}`]);
    }
  };

  const runAutomation = async () => {
    if (!selectedScript) return;

    setIsRunning(true);
    setLogs(prev => [
      ...prev, 
      '→ Starting automation script...',
      `→ Navigating to ${selectedScript.website}`,
      '→ Executing automation steps...'
    ]);

    try {
      await runAutomationScript(selectedScript);
      setLogs(prev => [...prev, '✓ Automation completed successfully!']);
    } catch (error) {
      setLogs(prev => [...prev, `✗ Error: ${error}`]);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Automation Runner</h2>
        <p className="text-gray-600">Execute and monitor your automation scripts</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Script Selection</h3>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg"
              onChange={(e) => handleScriptSelection(e.target.value)}
            >
              <option value="">Select a script to run</option>
              {mockScripts.map(script => (
                <option key={script.id} value={script.id}>{script.name}</option>
              ))}
            </select>

            {selectedScript && (
              <div className="mt-4">
                <h4 className="font-medium mb-2">Script Steps:</h4>
                <div className="space-y-2">
                  {selectedScript.steps.map((step, index) => (
                    <div key={step.id} className="flex items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm font-medium mr-2">{index + 1}.</span>
                      <span className="text-sm text-gray-700">{step.description}</span>
                      <span className="ml-auto text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {step.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6">
              <button
                onClick={runAutomation}
                disabled={!selectedScript || isRunning}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 px-4 rounded-lg font-medium"
              >
                {isRunning ? (
                  <span className="flex items-center justify-center">
                    <Square className="animate-spin h-4 w-4 mr-2" />
                    Running...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <Play className="h-4 w-4 mr-2" />
                    Run Automation
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Execution Log</h3>
            <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm h-64 overflow-y-auto">
              {logs.map((log, index) => (
                <div key={index} className={
                  log.includes('✓') ? 'text-green-400' :
                  log.includes('✗') ? 'text-red-400' :
                  log.includes('→') ? 'text-blue-400' :
                  'text-green-400'
                }>
                  {log}
                </div>
              ))}
            </div>
            <div className="mt-2">
              <button 
                onClick={() => setLogs(['AutoBot Pro v1.0 - Web Automation Tool', 'Waiting for script selection...'])}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Clear Logs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationPage;