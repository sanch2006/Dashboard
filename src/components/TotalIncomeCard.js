// src/components/TotalIncomeCard.js
import React from 'react';
import './TotalIncomeCard.css';
import { MdTrendingUp, MdTrendingDown } from 'react-icons/md';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
} from 'recharts';

function TotalIncomeCard({ amount, change, chartData }) {
  const isPositive = change >= 0;
  const TrendIcon = isPositive ? MdTrendingUp : MdTrendingDown;

  const sparklineData = chartData
    ? chartData.map((val, index) => ({ name: index, uv: val.value || val }))
    : [];

  return (
    <div className="total-income-card chart-card">
      <h3 className="card-title">Total Income</h3>
      <p className="income-amount">{amount}</p>
      <div className="income-trend">
        <TrendIcon className={`trend-icon ${isPositive ? 'positive' : 'negative'}`} />
        <span className={`trend-value ${isPositive ? 'positive' : 'negative'}`}>
          {Math.abs(change)}% last 30 days
        </span>
      </div>
      <div className="income-chart-placeholder">
        {sparklineData.length > 0 ? (
          <ResponsiveContainer width="100%" height={80}>
            <AreaChart data={sparklineData} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
              <Tooltip cursor={false} />
              <Area
                type="monotone"
                dataKey="uv"
                stroke={isPositive ? '#2ecc71' : '#e74c3c'}
                fill={isPositive ? 'rgba(46, 204, 113, 0.2)' : 'rgba(231, 76, 60, 0.2)'}
                strokeWidth={2}
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          <p className="chart-placeholder">No chart data</p>
        )}
      </div>
    </div>
  );
}

export default TotalIncomeCard;
