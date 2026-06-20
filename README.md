# 🃏 Flashcard Quiz App

A flashcard quiz app built with React.js as part of the **CodeAlpha App Development Internship** (Task 1).

## Features

- 🔄 **Flip animation** — tap/click a card to reveal the answer
- ➕ **Add cards** — create custom flashcards with your own Q&A
- ✏️ **Edit cards** — update any existing card anytime
- 🗑️ **Delete cards** — remove cards you no longer need
- ⬅️➡️ **Navigate** — Previous/Next buttons to move between cards
- 🔀 **Shuffle** — randomize card order for better practice
- 🔁 **Restart** — reset progress and start from the beginning
- 📊 **Progress tracking** — see how many cards you've seen
- 💾 **Persistent storage** — cards saved in localStorage
- ⌨️ **Keyboard shortcuts** — Arrow keys to navigate, Space to flip

## How to Run

```bash
npm install
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- React 18
- CSS3 (flip animation with `transform-style: preserve-3d`)
- localStorage for data persistence

## Project Structure

```
src/
├── App.js               # Root component & state management
├── components/
│   ├── Flashcard.js     # Card with flip animation
│   ├── Navigation.js    # Prev/Next/Shuffle/Restart controls
│   ├── StatsBar.js      # Total/Seen/Remaining stats
│   ├── CardModal.js     # Add/Edit modal form
│   └── CardList.js      # Scrollable list of all cards
```

## Built By

**Areesha Yaseen** — CodeAlpha Intern (App Development)  
Student ID: CA/DF1/148857
