// src/components/PaymentVouchersTable.js
import React, { useState, useMemo } from 'react';
import './PaymentVouchersTable.css';
import { MdArrowUpward, MdArrowDownward } from 'react-icons/md';

function PaymentVouchersTable({ data }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc'); // 'asc' or 'desc'

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const sortedAndFilteredData = useMemo(() => {
    if (!data) return []; // Handle case where data might be null

    let sortableData = [...data]; // Create a mutable copy

    // Filter data based on search term
    if (searchTerm) {
      sortableData = sortableData.filter(item =>
        Object.values(item).some(value =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Sort data
    if (sortColumn) {
      sortableData.sort((a, b) => {
        const aValue = a[sortColumn];
        const bValue = b[sortColumn];

        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return sortDirection === 'asc'
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        }
        // Handle numbers and other comparable types
        return sortDirection === 'asc'
          ? (aValue || 0) - (bValue || 0)
          : (bValue || 0) - (aValue || 0);
      });
    }

    return sortableData;
  }, [data, searchTerm, sortColumn, sortDirection]);


  if (!data) {
    return <div className="loading-state">Loading payment vouchers...</div>;
  }

  return (
    <div className="table-card payment-vouchers-table card">
      <h3 className="card-title">Payment Vouchers</h3>
      <div className="table-controls">
        <input
          type="text"
          placeholder="Search vouchers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th onClick={() => handleSort('date')}>
                Date {sortColumn === 'date' && (sortDirection === 'asc' ? <MdArrowUpward className="sort-icon" /> : <MdArrowDownward className="sort-icon" />)}
              </th>
              <th onClick={() => handleSort('voucherId')}>
                Voucher ID {sortColumn === 'voucherId' && (sortDirection === 'asc' ? <MdArrowUpward className="sort-icon" /> : <MdArrowDownward className="sort-icon" />)}
              </th>
              <th onClick={() => handleSort('department')}>
                Department {sortColumn === 'department' && (sortDirection === 'asc' ? <MdArrowUpward className="sort-icon" /> : <MdArrowDownward className="sort-icon" />)}
              </th>
              <th onClick={() => handleSort('amount')}>
                Amount {sortColumn === 'amount' && (sortDirection === 'asc' ? <MdArrowUpward className="sort-icon" /> : <MdArrowDownward className="sort-icon" />)}
              </th>
              <th onClick={() => handleSort('status')}>
                Status {sortColumn === 'status' && (sortDirection === 'asc' ? <MdArrowUpward className="sort-icon" /> : <MdArrowDownward className="sort-icon" />)}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedAndFilteredData.map((voucher) => (
              <tr key={voucher.voucherId}>
                <td>{voucher.date}</td>
                <td>{voucher.voucherId}</td>
                <td>{voucher.department}</td>
                <td>${voucher.amount.toLocaleString()}</td>
                <td>
                  <span className={`status-badge status-${voucher.status.toLowerCase().replace(' ', '-')}`}>
                    {voucher.status}
                  </span>
                </td>
              </tr>
            ))}
            {sortedAndFilteredData.length === 0 && (
              <tr>
                <td colSpan="5" className="no-data">No matching vouchers found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PaymentVouchersTable;