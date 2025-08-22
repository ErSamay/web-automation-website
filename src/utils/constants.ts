
import type { Script } from '../types/Script';

export const mockScripts: Script[] = [
  {
    id: '1',
    name: 'Amazon Product Search',
    website: 'amazon.com',
    steps: [
      { id: '1', type: 'fill', selector: '#twotabsearchtextbox', value: 'laptop', description: 'Search for laptop' },
      { id: '2', type: 'click', selector: 'input[type="submit"]', description: 'Click search button' },
      { id: '3', type: 'wait', selector: '[data-component-type="s-search-result"]', description: 'Wait for results' },
      { id: '4', type: 'click', selector: '[data-component-type="s-search-result"]:first-child h2 a', description: 'Click first result' }
    ],
    status: 'active',
    lastRun: new Date('2024-08-20')
  },
  {
    id: '2',
    name: 'GitHub Repository Search',
    website: 'github.com',
    steps: [
      { id: '1', type: 'fill', selector: 'input[placeholder="Search GitHub"]', value: 'react automation', description: 'Search repositories' },
      { id: '2', type: 'click', selector: 'button[type="submit"]', description: 'Submit search' },
      { id: '3', type: 'select', selector: 'select[name="type"]', value: 'Repositories', description: 'Filter by repositories' }
    ],
    status: 'draft'
  }
];