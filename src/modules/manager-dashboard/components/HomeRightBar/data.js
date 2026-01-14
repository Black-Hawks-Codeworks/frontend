// ---------- MENU ICONS ----------
export const sidebarIcons = [
  { name: 'DocumentAdd', key: 'home', description: 'Home' },
  { name: 'InfoSquare', key: 'members', description: 'Team Members' },
  { name: 'Down5', key: 'tasks', description: 'Tasks' },
  { name: 'Document2', key: 'team', description: 'Team' },
  { name: 'InfoSquare', key: 'income', description: 'Monthly Income' },
];

// ---------- SIDEBAR KPIs ----------
export const sidebarKpis = [
  { label: 'Returns', value: 320, trend: '+12%', color: '#f97316' },
  { label: 'Repairs', value: 2290, trend: '+5%', color: '#22c55e' },
  { label: 'Active Tickets', value: 4800, trend: '-3%', color: '#3b82f6' },
];

// ---------- SCHEDULED EVENTS ----------
export const events = [
  {
    id: 1,
    title: 'Monthly Analysis',
    time: 'Today, 16:00',
    type: 'Analysis',
    color: '#3b82f6',
  },
  {
    id: 2,
    title: 'Weekly Partner Meeting',
    time: 'Thu, 11:30',
    type: 'Meeting',
    color: '#22c55e',
  },
  {
    id: 3,
    title: 'Pre Christmas Gathering',
    time: 'Dec 20, 19:00',
    type: 'Social',
    color: '#facc15',
  },
];

// ---------- CHART DATA ----------

// Total Requests (yearly)
export const dataTotalRequests = [
  { name: 'Jan', rt: 4000, rp: 2400, amt: 2400 },
  { name: 'Mar', rt: 3000, rp: 1398, amt: 2210 },
  { name: 'May', rt: 2000, rp: 9800, amt: 2290 },
  { name: 'Jul', rt: 2780, rp: 3908, amt: 2000 },
  { name: 'Aug', rt: 1890, rp: 4800, amt: 2181 },
  { name: 'Nov', rt: 2390, rp: 3800, amt: 2500 },
  { name: 'Dec', rt: 3490, rp: 4300, amt: 2100 },
];

// Active Tickets (Dec segmented)
export const dataActiveTickets = [
  { name: 'Dec 1–10', rt: 3100, rp: 1850 },
  { name: 'Dec 11–20', rt: 2650, rp: 1600 },
  { name: 'Dec 21–31', rt: 2040, rp: 1250 },
];

// Total Resolved (monthly)
export const dataTotalResolved = [
  { name: 'Jan', rt: 360, rp: 260 },
  { name: 'Feb', rt: 320, rp: 240 },
  { name: 'Mar', rt: 310, rp: 230 },
  { name: 'Apr', rt: 300, rp: 220 },
  { name: 'May', rt: 370, rp: 290 },
  { name: 'Jun', rt: 310, rp: 230 },
  { name: 'Jul', rt: 320, rp: 250 },
  { name: 'Aug', rt: 330, rp: 260 },
  { name: 'Sep', rt: 300, rp: 230 },
  { name: 'Oct', rt: 310, rp: 240 },
  { name: 'Nov', rt: 340, rp: 260 },
  { name: 'Dec', rt: 370, rp: 290 },
];

// Customer Satisfaction vs Tickets Load
export const dataCustomerVsLoad = [
  { name: 'Jan', rp: 4000, rt: 2400, amt: 2400 },
  { name: 'Mar', rp: 3000, rt: 1398, amt: 2210 },
  { name: 'May', rp: 2000, rt: 9800, amt: 2290 },
  { name: 'Jun', rp: 2780, rt: 3908, amt: 2000 },
  { name: 'Aug', rp: 1890, rt: 4800, amt: 2181 },
  { name: 'Nov', rp: 2390, rt: 3800, amt: 2500 },
  { name: 'Dec', rp: 3490, rt: 4300, amt: 2100 },
];
