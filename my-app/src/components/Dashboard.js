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
      <Sidebar /> {/* This is where Sidebar is used */}
      <div className="main-content">
        <Header userDetails={userDetails} /> {/* This is where Header is used */}

        {/* Welcome Section */}
        <section className="welcome-section card">
          <h1 className="welcome-heading">Welcome {userDetails?.name || 'User'}!</h1>
          <p className="welcome-date">Today is {formattedDate}</p>
        </section>

        <div className="dashboard-grid"> {/* This is the main grid container */}

          {/* Stat Cards Container */}
          <section className="stat-cards-container">
            {stats && stats.map((stat) => (
              <StatCard key={stat.id} {...stat} /> /* StatCard is used here */
            ))}
          </section>

          {/* Charts and Total Income */}
          <section className="chart-card-wrapper grid-col-2">
            <StaffApplicationsChart data={staffApplications} /> {/* StaffApplicationsChart is used here */}
          </section>
          <section className="chart-card-wrapper grid-col-2">
            <AnnualPayrollSummaryChart data={annualPayrollSummary} /> {/* AnnualPayrollSummaryChart is used here */}
          </section>
          <section className="total-income-card-wrapper grid-col-2">
            <TotalIncomeCard amount={totalIncome?.amount} change={totalIncome?.change} chartData={totalIncome?.chartData} /> {/* TotalIncomeCard is used here */}
          </section>

          {/* Tables */}
          <section className="table-card-wrapper grid-col-2">
            <PaymentVouchersTable data={paymentVouchers} /> {/* PaymentVouchersTable is used here */}
          </section>
          <section className="table-card-wrapper grid-col-2">
            <BudgetHistoryTable data={budgetHistory} /> {/* BudgetHistoryTable is used here */}
          </section>

        </div>
      </div>
    </div>
  );
}
export default Dashboard;
console.log({
  Sidebar,
  Header,
  StatCard,
  StaffApplicationsChart,
  AnnualPayrollSummaryChart,
  TotalIncomeCard,
  PaymentVouchersTable,
  BudgetHistoryTable
});
