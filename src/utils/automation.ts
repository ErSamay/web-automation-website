// utils/automation.ts
// utils/automation.ts
import type { Script } from '../types/Script';
import type { AutomationStep } from '../types/AutomationStep';

export const runAutomationScript = async (script: Script): Promise<void> => {
  console.log(`Starting automation script: ${script.name}`);
  
  for (const step of script.steps) {
    await executeStep(step);
  }
  
  console.log('Automation completed successfully!');
};

export const executeStep = async (step: AutomationStep): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Executing step: ${step.description}`);
      resolve();
    }, 1000);
  });
};

export const getScriptById = (scripts: Script[], id: string): Script | undefined => {
  return scripts.find(script => script.id === id);
};

export const getActiveScripts = (scripts: Script[]): Script[] => {
  return scripts.filter(script => script.status === 'active');
};

export const getDraftScripts = (scripts: Script[]): Script[] => {
  return scripts.filter(script => script.status === 'draft');
};

export const updateScriptStatus = (
  scripts: Script[], 
  scriptId: string, 
  status: Script['status']
): Script[] => {
  return scripts.map(script =>
    script.id === scriptId 
      ? { ...script, status, lastRun: status === 'active' ? new Date() : script.lastRun }
      : script
  );
};