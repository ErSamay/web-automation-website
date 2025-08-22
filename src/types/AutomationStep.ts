export interface AutomationStep {
  id: string;
  type: 'fill' | 'click' | 'select' | 'wait';
  selector: string;
  value?: string;
  description: string;
}