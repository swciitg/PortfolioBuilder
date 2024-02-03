import moment from 'moment';
import React from 'react';

const EducationInfo = ({ education, isEditing, setEditedEducation }) => {
    const { degree, end, branch, gpa, start, university } = education;
    return (
        <div className="rounded-lg gap-2 flex flex-col justify-center relative">
            <div className="mb-2">

                {isEditing ? (
                    <input
                        type="text"
                        className={`py-2 px-3 w-full ${isEditing ? 'border border-gray-400' : 'border-none'} rounded-sm`}
                        defaultValue={university}
                        onChange={(e) => setEditedEducation((prev) => ({ ...prev, university: e.target.value }))}
                    />
                ) : (
                    <h2 className="text-lg font-medium uppercase">{university.length > 24 ? `${university.slice(0,24)}...` : university}</h2>
                )}
            </div>
            <div className="mb-2">

                {isEditing ? (
                    <input
                        type="text"
                        className={`py-2 px-3 w-full ${isEditing ? 'border border-gray-400' : 'border-none'} rounded-sm`}
                        defaultValue={branch}
                        onChange={(e) => setEditedEducation((prev) => ({ ...prev, branch: e.target.value }))}
                    />
                ) : (
                    <h2 className="text-lg font-medium uppercase">{branch.length > 24 ? `${branch.slice(0,24)}...` : branch}</h2>
                )}
            </div>
            <div className='flex justify-between'>
                {isEditing ? (
                    <div className="p-1 border rounded-sm border-gray-400">
                        <input
                            type="date"
                            className="outline-none p-1"
                            placeholder="Start Date"
                            onChange={(e) => setEditedEducation((prev) => ({ ...prev, start: moment(e.target.value).format("MM YYYY")}))}
                        />
                    </div> 
                ) : (
                    <p className='absolute top-1 right-20 tracking-tight text-sm'>{start} </p>
                )}
                {isEditing ? (
                    <div className="mb-2 border rounded-sm border-gray-400">
                        <input
                            type="date"
                            className="outline-none p-1 "
                            placeholder="End Date"
                            onChange={(e) => setEditedEducation((prev) => ({ ...prev, end: moment(e.target.value).format("MM YYYY") }))}
                        />
                    </div>
                ) : (
                    <p className='absolute top-1 right-5 tracking-tight text-sm'>- {!end?"Present":end}</p>
                )}
            </div>
            <div className='flex gap-2 items-center'>
                {isEditing ? (
                    <input
                        type="text"
                        className={`py-1 px-2 w-1/2 ${isEditing ? 'border border-gray-400' : 'border-none'} rounded-sm`}
                        defaultValue={degree}
                        onChange={(e) => setEditedEducation((prev) => ({ ...prev, degree: e.target.value }))}
                    />
                ) : (
                    <div className={`max-w-xs overflow-hidden whitespace-nowrap ${isEditing ? 'overflow-visible' : 'overflow-ellipsis'}`}>
                        {degree.length > 30 ? `${degree.slice(0, 30)}...` : degree}
                    </div>
                )}
                -
                <div className="">
                    {isEditing ? (
                        <input
                            type="number"
                            className={`py-1 px-2 w-1/2 ${isEditing ? 'border border-gray-400' : 'border-none'} rounded-sm`}
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
