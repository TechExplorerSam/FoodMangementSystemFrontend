import React from 'react';
import './InstructionModal.css';
import { useState } from 'react';
const keys = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
  ['Space', 'Backspace', 'Go']
];

const InstructionModal = ({ instructions, setInstructions, onClose }) => {

  const handleKeyClick = (key) => {
  if (key === 'Backspace') {
    setInstructions(prev => prev.slice(0, -1));
  } else if (key === 'Space') {
    setInstructions(prev => prev + ' ');
  } else if (key === 'Go') {
    console.log("Instruction Submitted:", instructions);
    onClose(); 
  } else {
    setInstructions(prev => prev + key);
  }
};

  return (
    <div className="modal-backdrop">
      <div className="instruction-modal">
        <button className="close-btn" onClick={onClose}>✕</button>
        <h3>Add Cooking instructions</h3>
        <textarea
          placeholder="Type your cooking instructions here..."
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />
        <p className="note">The restaurant will try its best to follow your request. However, refunds or cancellations in this regard won’t be possible.</p>
        
        <div className="modal-actions">
          <button className="cancel" onClick={onClose}>Cancel</button>
          <button className="next" onClick={onClose}>Next</button>
        </div>
      </div>
     
    </div>
  );
};

export default InstructionModal;
