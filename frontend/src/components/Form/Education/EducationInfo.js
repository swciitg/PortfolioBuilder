import moment from 'moment';
import React from 'react';

const EducationInfo = ({ education, isEditing, setEditedEducation }) => {
    const { degree, end, gpa, start, university } = education;
    return (
        <div className="rounded-lg gap-2 flex-col relative">
            <div className="mb-2">

                {isEditing ? (
                    <input
                        type="text"
                        className={`py-2 px-3 w-1/2 ${isEditing ? 'border border-gray-400' : 'border-none'} rounded-lg`}
                        defaultValue={university}
                        onChange={(e) => setEditedEducation((prev) => ({ ...prev, university: e.target.value }))}
                    />
                ) : (
                    <h2 className="text-2xl font-semibold">{university.length > 20 ? `${university.slice(0,20)}...` : university}</h2>
                )}
            </div>
            <div className='flex justify-between'>
                {isEditing ? (
                    <div className="mb-2 p-1 border rounded-sm">
                        <input
                            type="date"
                            className="outline-none p-1 "
                            placeholder="Start Date"
                            onChange={(e) => setEditedEducation((prev) => ({ ...prev, start: moment(e.target.value).format("MM YYYY")}))}
                        />
                    </div> 
                ) : (
                    <p className='absolute top-1 right-20'>{start} </p>
                )}
                {isEditing ? (
                    <div className="mb-2 p-1 border rounded-sm">
                        <input
                            type="date"
                            className="outline-none p-1 "
                            placeholder="End Date"
                            onChange={(e) => setEditedEducation((prev) => ({ ...prev, end: moment(e.target.value).format("MM YYYY") }))}
                        />
                    </div>
                ) : (
                    <p className='absolute top-1 right-1'>- {end}</p>
                )}
            </div>
            <div className='flex gap-2'>
                {isEditing ? (
                    <input
                        type="text"
                        className={`py-2 px-3 w-1/2 ${isEditing ? 'border border-gray-400' : 'border-none'} rounded-lg`}
                        defaultValue={degree}
                        onChange={(e) => setEditedEducation((prev) => ({ ...prev, degree: e.target.value }))}
                    />
                ) : (
                    <div className={`max-w-xs overflow-hidden whitespace-nowrap ${isEditing ? 'overflow-visible' : 'overflow-ellipsis'}`}>
                        {degree.length > 30 ? `${degree.slice(0, 30)}...` : degree}
                    </div>
                )}
                -
                <div className="mb-2">
                    {isEditing ? (
                        <input
                            type="number"
                            className={`py-2 px-3 w-1/2 ${isEditing ? 'border border-gray-400' : 'border-none'} rounded-lg`}
                            defaultValue={gpa}
                            onChange={(e) => setEditedEducation((prev) => ({ ...prev, gpa: e.target.value }))}
                        />
                    ) : (<p>{gpa} CGPA</p>)}
                </div>
            </div>
        </div>
    );
};

export default EducationInfo;
