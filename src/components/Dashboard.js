// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar';
import Header from './Header'; // <--- This is the Header COMPONENT we built!

import StatCard from './StatCard';
import StaffApplicationsChart from './StaffApplicationsChart';
// FIX: Corrected the import path here
import AnnualPayrollSummaryChart from './AnnualPayrollSummaryChart';
import TotalIncomeCard from './TotalIncomeCard';
import PaymentVouchersTable from './PaymentVouchersTable';
import BudgetHistoryTable from './BudgetHistoryTable';

import mockDashboardData from './mockData'; // <-- VERIFY THIS PATH: Is mockData.js in src/components/ or in src/data/? Adjust if needed (e.g., '../data/mockData')

function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const simulateFetch = async () => {
      try {
        setLoading(true);
        setTimeout(() => {
          setDashboardData(mockDashboardData);
          setLoading(false);
          setError(null);
        }, 500);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    simulateFetch();
  }, []);

  if (loading) return <div className="loading-state">Loading dashboard...</div>;
  if (error) return <div className="error-state">Error: {error.message}</div>;

  const {
    stats,
    staffApplications,
    annualPayrollSummary,
    totalIncome,
    paymentVouchers,
    budgetHistory,
    userDetails
  } = dashboardData || {};

  // These variables are for the separate "Welcome" section below the main header
  
  const userName = userDetails?.name || 'Meaghan Lowest';

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        {/*
          *********************************************************************************************
          *** IMPORTANT: YOU MUST REMOVE THE ENTIRE HARDCODED <header> BLOCK FROM HERE!             ***
          *** ***
          *** The <header className="dashboard-header"> ... </header> that you currently have is   ***
          *** your old, manual header. It is OVERRIDING the `Header` component.                     ***
          *** This is why the date range picker functionality (calendar popup) isn't showing.       ***
          *** ***
          *** Replace the ENTIRE hardcoded <header> block with the line below:                      ***
          *********************************************************************************************
        */}
        <Header userDetails={userDetails} /> {/* <--- USE THE HEADER COMPONENT HERE! */}

        {/* This is the separate "Welcome" section below the main header. */}
        

        <section className="stat-cards-container">
          {stats && stats.map((stat) => (
            <StatCard key={stat.id} {...stat} />
          ))}
        </section>

        {/*
          IMPORTANT: Replace these old "chart-row" divs with the single "dashboard-grid"
          and the specific section wrappers (chart-card-wrapper, table-card-wrapper).
          Your Dashboard.css is set up for "dashboard-grid", not "chart-row".
        */}
       <div className="dashboard-grid">
  <section className="chart-card-wrapper card">
    <StaffApplicationsChart data={staffApplications} />
  </section>
  <section className="chart-card-wrapper card">
    <AnnualPayrollSummaryChart data={annualPayrollSummary} />
  </section>
  <section className="total-income-card-wrapper card">
    <TotalIncomeCard
      amount={totalIncome?.amount}
      change={totalIncome?.change}
      chartData={totalIncome?.chartData}
    />
  </section>
</div>

{/* Second row starts here */}
<div className="dashboard-grid second-row">
  <section className="table-card-wrapper card">
    <PaymentVouchersTable data={paymentVouchers} />
  </section>
  <section className="table-card-wrapper card">
    <BudgetHistoryTable data={budgetHistory} />
  </section>
</div>

      </div>
    </div>
  );
}

export default Dashboard;