# Web Automation Dashboard

A powerful web automation tool that allows you to create, manage, and execute automated browser scripts with real-time monitoring and analytics.

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd web_automation

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

## 📋 Features

- **Visual Script Builder**: Create automation scripts with an intuitive interface
- **Real-time Monitoring**: Watch your scripts execute step-by-step
- **Performance Analytics**: Track success rates and execution metrics
- **Multi-site Support**: Automate tasks across different websites
- **Scheduling**: Set up automated script execution
- **Error Handling**: Robust error detection and recovery

## 🏗️ Project Structure

### Page Components

#### HomePage (Dashboard)
- Overview statistics cards showing key metrics
- Recent activity feed with latest script executions
- Quick action buttons for common tasks
- Performance metrics display with charts and graphs

#### AutomationPage
- Script selection dropdown for choosing automation workflows
- Real-time execution monitoring with live updates
- Step-by-step progress tracking with visual indicators
- Console log output for debugging and monitoring

#### ScriptsPage
- Comprehensive script listing table with sorting and filtering
- Full CRUD operations (Create, Read, Update, Delete)
- Script status management (active/inactive/scheduled)
- Bulk actions for managing multiple scripts at once

#### AnalyticsPage
- Detailed performance metrics and KPI tracking
- Execution trends over time with interactive charts
- Success rate analytics with failure pattern analysis
- Historical data visualization for long-term insights

#### SettingsPage
- General automation settings and configurations
- Notification preferences for script events
- Timeout configurations and retry settings
- User preferences and customization options

## 🤖 Automation Features

### Supported Automation Steps

#### Fill Input Fields
Automatically populate form fields with specified values.

```typescript
{
  type: 'fill',
  selector: '#email-input',
  value: 'user@example.com',
  description: 'Fill email field'
}
```

#### Click Elements
Simulate user clicks on buttons, links, and other interactive elements.

```typescript
{
  type: 'click',
  selector: 'button[type="submit"]',
  description: 'Click submit button'
}
```

#### Select Dropdown Options
Choose specific options from dropdown menus and select elements.

```typescript
{
  type: 'select',
  selector: '#country-select',
  value: 'USA',
  description: 'Select country'
}
```

#### Wait for Elements
Pause execution until specific elements appear or conditions are met.

```typescript
{
  type: 'wait',
  selector: '.loading-complete',
  description: 'Wait for page load'
}
```

## 📝 Sample Automation Scripts

### Amazon Product Search
Automated product search workflow for Amazon.

```typescript
const amazonScript: Script = {
  id: '1',
  name: 'Amazon Product Search',
  website: 'amazon.com',
  steps: [
    {
      id: '1',
      type: 'fill',
      selector: '#twotabsearchtextbox',
      value: 'laptop',
      description: 'Search for laptop'
    },
    {
      id: '2',
      type: 'click',
      selector: 'input[type="submit"]',
      description: 'Click search button'
    }
  ],
  status: 'active'
};
```
