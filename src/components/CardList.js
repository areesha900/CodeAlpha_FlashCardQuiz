import React from 'react';
import './CardList.css';

function CardList({ cards, currentIndex, onEdit, onDelete, onSelect }) {
  if (cards.length === 0) return null;

  return (
    <div className="card-list-wrapper">
      <h2 className="list-title">All Cards ({cards.length})</h2>
      <div className="card-list">
        {cards.map((card, i) => (
          <div
            key={card.id}
            className={`list-item ${i === currentIndex ? 'active' : ''}`}
            onClick={() => onSelect(i)}
          >
            <div className="list-item-content">
              <p className="list-item-q">{card.question}</p>
              <p className="list-item-a">{card.answer}</p>
            </div>
            <div className="list-item-actions" onClick={(e) => e.stopPropagation()}>
              <button
                className="list-icon-btn edit"
                onClick={() => onEdit(card)}
                aria-label="Edit card"
                title="Edit"
              >✏️</button>
              <button
                className="list-icon-btn delete"
                onClick={() => onDelete(card.id)}
                aria-label="Delete card"
                title="Delete"
              >🗑️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;
