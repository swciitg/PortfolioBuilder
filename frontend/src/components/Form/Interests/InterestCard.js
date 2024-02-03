import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const InterestCard = ({ interest, onRemovePressed, onEditPressed }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedInterest, seteditedInterest] = useState(interest.interest);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        onEditPressed(interest, editedInterest);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        seteditedInterest(interest.interest);
    };

    return (
        <div className="flex-col rounded-sm bg-gray-100 border p-4 relative w-3/4 row">
            {
                isEditing ? (
                    <>
                        <input
                            type="text"
                            className={`py-2 px-3 w-full ${isEditing ? 'border border-gray-400' : 'border-none'} rounded-sm`}
                            value={editedInterest}
                            onChange={(e) => seteditedInterest(e.target.value)}
                        />
                    </>
                ) : (
                    <div className="my-2">{interest.interest}</div>
                )
            }
            {isEditing ? (
                <div className='pt-6 items-center'>
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
                        <button onClick={() => { onRemovePressed(interest) }}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </>
            )}
        </div >
    );
}

export default InterestCard;
