import type { AutomationStep } from './AutomationStep';

export interface Script {
  id: string;
  name: string;
  website: string;
  steps: AutomationStep[];
  status: 'draft' | 'active' | 'completed';
  lastRun?: Date;
}