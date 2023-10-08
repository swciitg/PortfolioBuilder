import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, { useState } from 'react'
import ExperienceInfo from './ExperienceInfo';
// import EducationInfo from './EducationInfo';

const ExperienceCard = ({ experience, onRemovePressed, onEditPressed}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedExperience, setEditedExperience] = useState(experience);
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    onEditPressed(experience, editedExperience);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedExperience(experience);
  };
  return (
    <div className="flex-col rounded-lg shadow-lg p-6 relative w-1/2 row">
      {
         <ExperienceInfo experience={experience} isEditing={isEditing} setEditedExperience={setEditedExperience}/>
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
            <button onClick={()=>{onRemovePressed(experience)}}>
                <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default ExperienceCard