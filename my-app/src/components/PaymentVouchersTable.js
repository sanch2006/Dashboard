// src/components/PaymentVouchersTable.js
import React from 'react';
import './TableComponents.css'; // Import general table CSS

function PaymentVouchersTable({ data }) {
  if (!data) return <div className="table-placeholder">No payment vouchers data available.</div>;

  return (
    <div className="table-card chart-card"> {/* Reuse chart-card styling */}
      <h3 className="table-title">Payment vouchers</h3>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Request For</th>
              <th>Approved On</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.type}</td>
                <td>{row.requestFor}</td>
                <td>{row.approvedOn}</td>
                <td><span className={`status-badge status-${row.status.toLowerCase().replace(' ', '-')}`}>{row.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PaymentVouchersTable;