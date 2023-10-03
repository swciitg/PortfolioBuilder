import { useState } from 'react';

export const SectionTitle = ({ initialTitle }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(initialTitle);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <h3 className='mt-5 mb-2 mx-3' onDoubleClick={handleDoubleClick}>
      {isEditing ? (
        <input type="text" value={title} onBlur={handleBlur} onChange={handleChange} autoFocus />
      ) : (
        title
      )}
    </h3>
  );
};

