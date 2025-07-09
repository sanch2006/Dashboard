// src/mockData.js

const mockDashboardData = {
  userDetails: {
    name: 'Meaghan Lowest',
    avatar: 'https://via.placeholder.com/40/3498db/FFFFFF?text=ML' // A placeholder for user avatar
  },
  stats: [
    {
      id: 1,
      title: '250',
      description: 'Total applicants',
      subDescription: 'You got 250 new applicants'
      // icon: 'UserIcon' // Will use this conceptually
    },
    {
      id: 2,
      title: '200',
      description: 'Total short listed',
      subDescription: 'You have 200 total short listed'
    },
    {
      id: 3,
      title: '38',
      description: 'Total projects',
      subDescription: 'You have 38 total projects'
    },
    {
      id: 4,
      title: '8',
      description: 'Total departments',
      subDescription: 'You have 8 total departments'
    },
  ],
  staffApplications: [
    { name: 'Pending', value: 100 },
    { name: 'Approved', value: 60 },
    { name: 'Rejected', value: 40 },
    { name: 'On Hold', value: 40 },
  ],
  annualPayrollSummary: [
    { name: 'Jan', salary: 4000, bonus: 2400 },
    { name: 'Feb', salary: 3000, bonus: 1398 },
    { name: 'Mar', salary: 2000, bonus: 9800 },
    { name: 'Apr', salary: 2780, bonus: 3908 },
    { name: 'May', salary: 1890, bonus: 4800 },
    { name: 'Jun', salary: 2390, bonus: 3800 },
    { name: 'Jul', salary: 3490, bonus: 4300 },
    { name: 'Aug', salary: 3000, bonus: 2000 },
    { name: 'Sep', salary: 2500, bonus: 2800 },
    { name: 'Oct', salary: 3800, bonus: 3200 },
    { name: 'Nov', salary: 4200, bonus: 2900 },
    { name: 'Dec', salary: 3600, bonus: 2500 },
  ],
  totalIncome: {
    amount: '$1,800,000.00',
    change: 12.5, // Percentage change
    chartData: [ // Small data for a sparkline if needed
        { value: 2000 }, { value: 3000 }, { value: 2500 }, { value: 4000 }, { value: 3500 }, { value: 4500 }
    ]
  },
   paymentVouchers: [
    // Add an 'amount' property (as a number) to each object
    { date: '2023-01-01', voucherId: 'PV001', department: 'Finance', amount: 1500.75, status: 'Approved' },
    { date: '2023-01-05', voucherId: 'PV002', department: 'HR', amount: 200.00, status: 'Pending' },
    { date: '2023-01-10', voucherId: 'PV003', department: 'IT', amount: 875.50, status: 'Approved' },
    { date: '2023-01-15', voucherId: 'PV004', department: 'Marketing', amount: 300.00, status: 'Approved' },
    { date: '2023-01-20', voucherId: 'PV005', department: 'Sales', amount: 1200.00, status: 'Pending' },
    // You can add more mock data here if you wish
  ],
  budgetHistory: [
    { id: '001', budgetId: '80205001', budgetPeriod: '2023-2024', budgetAmount: '$800,000.00', remainingAmount: '$150,000.00' },
    { id: '002', budgetId: '80205002', budgetPeriod: '2023-2024', budgetAmount: '$750,000.00', remainingAmount: '$200,000.00' },
    { id: '003', budgetId: '80205003', budgetPeriod: '2023-2024', budgetAmount: '$900,000.00', remainingAmount: '$100,000.00' },
    { id: '004', budgetId: '80205004', budgetPeriod: '2023-2024', budgetAmount: '$600,000.00', remainingAmount: '$50,000.00' },
  ],
};

export default mockDashboardData;