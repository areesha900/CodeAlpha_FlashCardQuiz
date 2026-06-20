import React, { useState, useEffect } from 'react';
import './CardModal.css';

function CardModal({ editCard, onSave, onClose }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    if (editCard) {
      setQuestion(editCard.question);
      setAnswer(editCard.answer);
    }
  }, [editCard]);

  const handleSave = () => {
    if (question.trim() && answer.trim()) {
      onSave(question.trim(), answer.trim());
    }
  };

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box" role="dialog" aria-modal="true">
        <div className="modal-header">
          <h2>{editCard ? 'Edit Flashcard' : 'Add Flashcard'}</h2>
          <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        </div>

        <div className="modal-body">
          <div className="field">
            <label className="field-label">Question</label>
            <textarea
              className="field-input"
              rows={3}
              placeholder="Enter the question…"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              autoFocus
            />
          </div>
          <div className="field">
            <label className="field-label">Answer</label>
            <textarea
              className="field-input"
              rows={3}
              placeholder="Enter the answer…"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>
        </div>

        <div className="modal-footer">
          <button className="modal-btn cancel" onClick={onClose}>Cancel</button>
          <button
            className="modal-btn save"
            onClick={handleSave}
            disabled={!question.trim() || !answer.trim()}
          >
            {editCard ? 'Save Changes' : 'Add Card'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardModal;
