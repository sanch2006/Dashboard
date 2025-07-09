// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar';
import Header from './Header';
import StatCard from './StatCard';
import StaffApplicationsChart from './StaffApplicationsChart';
import AnnualPayrollSummaryChart from './AnnualPayrollSummaryChart';
import TotalIncomeCard from './TotalIncomeCard';
import PaymentVouchersTable from './PaymentVouchersTable';
import BudgetHistoryTable from './BudgetHistoryTable';

import mockDashboardData from './mockData'; // Correct path for a file in the same directory

function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate data fetching
    const simulateFetch = async () => {
      try {
        setLoading(true);
        // Option A: Simulate a successful fetch (this is what you want active now)
        setTimeout(() => {
          setDashboardData(mockDashboardData);
          setLoading(false);
          setError(null); // Clear any previous error on successful fetch
        }, 500);

        // Option B: Simulate a failed fetch (uncomment this and comment out Option A to test error state)
        // setTimeout(() => {
        //   setError(new Error('Failed to load dashboard data. Please try again.'));
        //   setLoading(false);
        // }, 1000);

      } catch (err) {
        // This catch block would be more relevant with actual API calls
        setError(err);
        setLoading(false);
      }
    };

    simulateFetch(); // Call the simulation function
  }, []);

  if (loading) {
    return <div className="loading-state">Loading dashboard...</div>;
  }

  if (error) {
    return <div className="error-state">Error: {error.message}</div>;
  }

  // --- DESTUCTURE DATA AND RENDER JSX HERE ---
  const {
    stats,
    staffApplications,
    annualPayrollSummary,
    totalIncome,
    paymentVouchers,
    budgetHistory,
    userDetails
  } = dashboardData || {}; // Add || {} to prevent errors if dashboardData is null initially

  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);

  return (
    <div className="dashboard-container">
      <Sidebar/>
      <div className="main-content">
        <Header userDetails={userDetails} />

        {/* Welcome Section */}
        <section className="welcome-section card">
          <h1 className="welcome-heading">Welcome {userDetails?.name || 'User'}!</h1>
          <p className="welcome-date">Today is {formattedDate}</p>
        </section>

        

          {/* Stat Cards Container */}
<section className="stat-cards-container">
  {stats && stats.map((stat) => (
    <StatCard key={stat.id} {...stat} />
  ))}
</section>

{/* First Row: 3 Charts */}
<div className="chart-row chart-row-3">
  <div className="chart-item"><StaffApplicationsChart data={staffApplications} /></div>
  <div className="chart-item"><AnnualPayrollSummaryChart data={annualPayrollSummary} /></div>
  <div className="chart-item"><TotalIncomeCard amount={totalIncome?.amount} change={totalIncome?.change} chartData={totalIncome?.chartData} /></div>
</div>

{/* Second Row: 2 Tables */}
<div className="chart-row chart-row-2">
  <div className="chart-item"><PaymentVouchersTable data={paymentVouchers} /></div>
  <div className="chart-item"><BudgetHistoryTable data={budgetHistory} /></div>
</div>


          

        </div>
      </div>
    
   ) 
}
export default Dashboard;