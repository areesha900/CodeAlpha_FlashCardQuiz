import React from 'react';
import './Flashcard.css';

function Flashcard({ card, isFlipped, onFlip }) {
  if (!card) {
    return (
      <div className="card-scene">
        <div className="card-empty">
          <span className="card-empty-icon">📭</span>
          <p>No cards yet — add one below!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card-scene" onClick={onFlip} role="button" tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onFlip()}
      aria-label={isFlipped ? `Answer: ${card.answer}` : `Question: ${card.question}. Press to reveal answer.`}
    >
      <div className={`card-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-face front">
          <span className="card-face-label">Question</span>
          <p className="card-face-text">{card.question}</p>
          <span className="card-hint">tap to reveal answer</span>
        </div>
        <div className="card-face back">
          <span className="card-face-label">Answer</span>
          <p className="card-face-text">{card.answer}</p>
          <span className="card-hint">tap to flip back</span>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
