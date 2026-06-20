import React from 'react';
import './Navigation.css';

function Navigation({ currentIndex, total, onPrev, onNext, onShuffle, onRestart, onAdd }) {
  const pct = total > 0 ? Math.round(((currentIndex + 1) / total) * 100) : 0;

  return (
    <div className="nav-wrapper">
      <div className="nav-progress">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${pct}%` }} />
        </div>
        <span className="progress-label">{total > 0 ? `${currentIndex + 1} / ${total}` : '0 / 0'}</span>
      </div>

      <div className="nav-buttons">
        <button className="nav-btn" onClick={onPrev} disabled={currentIndex <= 0 || total === 0}>
          ← Prev
        </button>
        <div className="nav-actions">
          <button className="action-btn" onClick={onShuffle} title="Shuffle cards">🔀</button>
          <button className="action-btn" onClick={onRestart} title="Restart from beginning">🔁</button>
          <button className="action-btn add-btn" onClick={onAdd} title="Add new card">+ Add Card</button>
        </div>
        <button className="nav-btn" onClick={onNext} disabled={currentIndex >= total - 1 || total === 0}>
          Next →
        </button>
      </div>
    </div>
  );
}

export default Navigation;
