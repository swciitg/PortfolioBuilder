import React, { useState } from 'react';

const SectionTitleEdit = ({ title, onTitleChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleInputChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleSaveClick = () => {
    onTitleChange(newTitle);
    setIsEditing(false);
  };

  return (
    <div className="mb-2 mx-3">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newTitle}
            onChange={handleInputChange}
          />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div>
          <span onClick={() => setIsEditing(true)}>{title}</span>
        </div>
      )}
    </div>
  );
};

export default SectionTitleEdit;
