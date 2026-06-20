import React from 'react';
import './StatsBar.css';

function StatsBar({ total, seen, remaining }) {
  return (
    <div className="stats-bar">
      <div className="stat-item">
        <span className="stat-num">{total}</span>
        <span className="stat-label">Total</span>
      </div>
      <div className="stat-divider" />
      <div className="stat-item">
        <span className="stat-num seen">{seen}</span>
        <span className="stat-label">Seen</span>
      </div>
      <div className="stat-divider" />
      <div className="stat-item">
        <span className="stat-num remaining">{remaining}</span>
        <span className="stat-label">Remaining</span>
      </div>
    </div>
  );
}

export default StatsBar;
