import React, { useState, useEffect, useCallback } from 'react';
import Flashcard from './components/Flashcard';
import Navigation from './components/Navigation';
import CardModal from './components/CardModal';
import CardList from './components/CardList';
import StatsBar from './components/StatsBar';
import './App.css';

const DEFAULT_CARDS = [
  { id: 1, question: "What is a variable in programming?", answer: "A named storage location that holds a value which can change during program execution." },
  { id: 2, question: "What does HTML stand for?", answer: "HyperText Markup Language — the standard language for creating web pages." },
  { id: 3, question: "What is a function?", answer: "A reusable block of code that performs a specific task when called." },
  { id: 4, question: "What is an algorithm?", answer: "A step-by-step procedure used to solve a problem or accomplish a task." },
  { id: 5, question: "What is Object-Oriented Programming (OOP)?", answer: "A paradigm that organizes code into objects containing data (attributes) and behavior (methods)." },
];

function App() {
  const [cards, setCards] = useState(() => {
    try {
      const saved = localStorage.getItem('flashcards_v1');
      return saved ? JSON.parse(saved) : DEFAULT_CARDS;
    } catch {
      return DEFAULT_CARDS;
    }
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [seenIds, setSeenIds] = useState(new Set());
  const [modalOpen, setModalOpen] = useState(false);
  const [editCard, setEditCard] = useState(null);

  useEffect(() => {
    localStorage.setItem('flashcards_v1', JSON.stringify(cards));
  }, [cards]);

  useEffect(() => {
    if (cards.length > 0) {
      setSeenIds(prev => new Set([...prev, cards[currentIndex]?.id]));
    }
  }, [currentIndex, cards]);

  const handleNext = useCallback(() => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(i => i + 1);
      setIsFlipped(false);
    }
  }, [currentIndex, cards.length]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(i => i - 1);
      setIsFlipped(false);
    }
  }, [currentIndex]);

  useEffect(() => {
    const handleKey = (e) => {
      if (modalOpen) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === ' ') { e.preventDefault(); setIsFlipped(f => !f); }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleNext, handlePrev, modalOpen]);

  const handleShuffle = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
    setSeenIds(new Set());
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setSeenIds(new Set());
  };

  const handleAddCard = (question, answer) => {
    const newCard = { id: Date.now(), question, answer };
    setCards(prev => [...prev, newCard]);
    setCurrentIndex(cards.length);
    setIsFlipped(false);
  };

  const handleEditCard = (question, answer) => {
    setCards(prev => prev.map(c => c.id === editCard.id ? { ...c, question, answer } : c));
  };

  const handleDeleteCard = (id) => {
    const newCards = cards.filter(c => c.id !== id);
    setCards(newCards);
    if (currentIndex >= newCards.length) setCurrentIndex(Math.max(0, newCards.length - 1));
    setIsFlipped(false);
    setSeenIds(new Set());
  };

  const openAdd = () => { setEditCard(null); setModalOpen(true); };
  const openEdit = (card) => { setEditCard(card); setModalOpen(true); };

  const currentCard = cards[currentIndex] || null;
  const seen = seenIds.size;

  return (
    <div className="app-wrapper">
      <div className="app-container">
        <header className="app-header">
          <div className="header-icon">🃏</div>
          <div>
            <h1 className="app-title">Flashcard Quiz</h1>
            <p className="app-subtitle">Tap a card to reveal the answer · use arrow keys to navigate</p>
          </div>
        </header>

        <StatsBar total={cards.length} seen={seen} remaining={Math.max(0, cards.length - seen)} />

        <Flashcard
          card={currentCard}
          isFlipped={isFlipped}
          onFlip={() => cards.length > 0 && setIsFlipped(f => !f)}
        />

        <Navigation
          currentIndex={currentIndex}
          total={cards.length}
          onPrev={handlePrev}
          onNext={handleNext}
          onShuffle={handleShuffle}
          onRestart={handleRestart}
          onAdd={openAdd}
        />

        <CardList
          cards={cards}
          currentIndex={currentIndex}
          onEdit={openEdit}
          onDelete={handleDeleteCard}
          onSelect={(i) => { setCurrentIndex(i); setIsFlipped(false); }}
        />
      </div>

      {modalOpen && (
        <CardModal
          editCard={editCard}
          onSave={(q, a) => { editCard ? handleEditCard(q, a) : handleAddCard(q, a); setModalOpen(false); }}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
