// src/App.js
import React from 'react';
import Dashboard from './components/Dashboard'; // Import the Dashboard component
import './App.css'; // Or a more global style if preferred. For now, we'll use Dashboard.css

function App() {
  return (
    <div className="App">
      <Dashboard /> {/* Render the Dashboard component */}
    </div>
  );
}

export default App;