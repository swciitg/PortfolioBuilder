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
    <div className="w-3/4 flex-col rounded-sm border bg-gray-100 shadow-sm p-4 relative row">
      {
         <ExperienceInfo experience={experience} isEditing={isEditing} setEditedExperience={setEditedExperience}/>
      }
      {isEditing ? (
        <div className='pt-3 items-center'>
          <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mr-2" onClick={handleSaveClick}>
            Save
          </button>
          <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mr-2" onClick={handleCancelClick}>Cancel</button>
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