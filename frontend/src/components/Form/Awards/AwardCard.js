import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const AwardCard = ({ award, onRemovePressed, onEditPressed }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedAward, setEditedAward] = useState(award.award);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        onEditPressed(award, editedAward);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setEditedAward(award.award);
    };

    return (
        <div className="flex-col rounded-lg shadow-lg p-6 relative w-1/2 row">
            {
                isEditing ? (
                    <>
                        <input
                            type="text"
                            className={`py-2 px-3 w-1/2 ${isEditing ? 'border border-gray-400' : 'border-none'} rounded-lg`}
                            value={editedAward}
                            onChange={(e) => setEditedAward(e.target.value)}
                        />
                    </>
                ) : (
                    <div className="col">{award.award}</div>
                )
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
                        <button onClick={() => { onRemovePressed(award) }}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </>
            )}
        </div >
    );
}

export default AwardCard;
