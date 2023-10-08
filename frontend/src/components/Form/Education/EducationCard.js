import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, { useState } from 'react'
import EducationInfo from './EducationInfo';

const EducationCard = ({ education, onRemovePressed, onEditPressed}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedEducation, setEditedEducation] = useState(education);
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    onEditPressed(education, editedEducation);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedEducation(education);
  };
  return (
    <div className="flex-col rounded-lg shadow-lg p-6 relative w-1/2 row">
      {
         <EducationInfo education={education} isEditing={isEditing} setEditedEducation={setEditedEducation}/>
      }
      {isEditing ? (
        <div className='pt-4 items-center'>
          <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={handleSaveClick}>
            Save
          </button>
          <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={handleCancelClick}>Cancel</button>
        </div>
      ) : (
        <>
          <div className="absolute top-2 right-2">
            <button onClick={handleEditClick}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
          </div>
          <div className="absolute bottom-2 right-2">
            <button onClick={()=>{onRemovePressed(education)}}>
                <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default EducationCard