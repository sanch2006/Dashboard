// src/components/BudgetHistoryTable.js
import React from 'react';
import './TableComponents.css'; // Import general table CSS

function BudgetHistoryTable({ data }) {
  if (!data) return <div className="table-placeholder">No budget history data available.</div>;

  return (
    <div className="table-card chart-card"> {/* Reuse chart-card styling */}
      <h3 className="table-title">Budget history</h3>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Budget ID</th>
              <th>Budget Period</th>
              <th>Budget Amount</th>
              <th>Remaining Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.budgetId}</td>
                <td>{row.budgetPeriod}</td>
                <td>{row.budgetAmount}</td>
                <td>{row.remainingAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BudgetHistoryTable;