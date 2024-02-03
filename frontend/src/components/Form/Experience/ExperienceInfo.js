import moment from 'moment';
import React from 'react';

const ExperienceInfo = ({ experience, isEditing, setEditedExperience }) => {
    const { company, end, desc, start, position } = experience;
    return (
        <div className="rounded-lg gap-1 flex-col relative">
            <div className="mb-2">

                {isEditing ? (
                    <input
                        type="text"
                        className={`py-1 px-2 w-1/2 ${isEditing ? 'border border-gray-400' : 'border-none'} rounded-sm`}
                        defaultValue={company}
                        onChange={(e) => setEditedExperience((prev) => ({ ...prev, company: e.target.value }))}
                    />
                ) : (
                    <h2 className="text-xl font-semibold">{company.length > 20 ? `${company.slice(0, 20)}...` : company}</h2>
                )}
            </div>
            <div className='flex justify-between'>
                {isEditing ? (
                    <div className="w-1/2 mb-2 p-1 border border-gray-400 rounded-sm text-xs flex items-center mr-2">
                        <input
                            type="date"
                            className="outline-none p-1 "
                            placeholder="Start Date"
                            onChange={(e) => setEditedExperience((prev) => ({ ...prev, start: moment(e.target.value).format("MM YYYY") }))}
                        />
                    </div>
                ) : (
                    <p className='absolute top-1 right-20 text-xs'>{start} </p>
                )}
                {isEditing ? (
                    <div className="w-1/2 mb-2 p-1 border border-gray-400 rounded-sm text-xs flex items-center">
                        <input
                            type="date"
                            className="outline-none p-1 "
                            placeholder="End Date"
                            onChange={(e) => setEditedExperience((prev) => ({ ...prev, end: moment(e.target.value).format("MM YYYY") }))}
                        />
                    </div>
                ) : (
                    <p className='absolute top-1 right-6 text-xs'>- {end?end:"Present"}</p>
                )}
            </div>
            <div className='flex gap-2 items-center mb-2'>
                {isEditing ? (
                    <input
                        type="text"
                        className={`py-1 px-2 w-1/2 ${isEditing ? 'border border-gray-400' : 'border-none'} rounded-sm`}
                        defaultValue={desc}
                        onChange={(e) => setEditedExperience((prev) => ({ ...prev, desc: e.target.value }))}
                    />
                ) : (
                    <div className={`max-w-xs overflow-hidden whitespace-nowrap ${isEditing ? 'overflow-visible' : 'overflow-ellipsis'}`}>
                        {desc.length > 30 ? `${desc.slice(0, 30)}...` : desc}

                    </div>
                )}
                -
                <div className="">
                    {isEditing ? (
                        <input
                            type="text"
                            className={`py-1 px-2 w-1/2 ${isEditing ? 'border border-gray-400' : 'border-none'} rounded-sm`}
                            defaultValue={position}
                            onChange={(e) => setEditedExperience((prev) => ({ ...prev, position: e.target.value }))}
                        />
                    ) : (<p>{position}</p>)}
                </div>
            </div>
        </div>
    );
};

export default ExperienceInfo;
