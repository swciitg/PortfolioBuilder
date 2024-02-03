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
    <div className="flex-col rounded-sm shadow-sm border bg-gray-100 p-4 my-4 relative w-3/4">
      {
         <EducationInfo education={education} isEditing={isEditing} setEditedEducation={setEditedEducation}/>
      }
      {isEditing ? (
        <div className='pt-3 items-center'>
          <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-1 px-4 rounded mr-2" onClick={handleSaveClick}>
            Save
          </button>
          <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-1 px-4 rounded mr-2" onClick={handleCancelClick}>Cancel</button>
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