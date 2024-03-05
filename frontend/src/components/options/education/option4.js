// Timeline.js
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Timeline = (props) => {
    const {educationTitle, education} = props;

    return (
        <div id='education' className="min-h-screen  flex items-center justify-center bg-white text-black" style={{fontFamily:"cursive"}}>
        <div className="max-w-screen-lg w-full mx-auto">
            <div className='mt-12 mb-2 md:mb-0 text-lg md:text-2xl text-center lowercase'>{educationTitle}.</div>
            <div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative wrap overflow-hidden p-2 md:p-8 bg-white rounded-md"
            >
                {education && education.map((education, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className={`mb-2 md:mb-4 flex justify-between items-center cursor-default ${
                    index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
                    }`}
                >
                    <div className="order-1 w-5/12"></div>

                    <div
                    className={`mx-2 order-1 p-2 w-12 h-12 md:w-16 md:h-16 rounded-full border border-black flex items-center justify-center`}
                    >
                    <span className="text-xs font-medium text-center">
                        {`${education.education.start} - ${education.education.end ? education.education.end : education.education.presentJob ? 'Present' : ''}`}
                    </span>
                    </div>

                    <div
                    className={`order-1 w-5/12 border border-opacity-40 p-4 shadow-md rounded-md flex flex-col items-center ${
                        index % 2 === 0 ? 'text-right pr-6 md:pr-10 md:items-end' : 'text-left pl-6 md:pl-10 md:items-start'
                    }`}
                    >
                    <p className="mb-3 md:mb-2 text-lg font-medium text-gray-800 leading-4 md:leading-none">
                        {education.education.degree}
                    </p>
                    <p className="text-xs text-black leading-4 md:leading-none">{education.education.branch}</p>
                    <p className="text-xs leading-4 md:leading-none">CGPA: {education.education.gpa}</p>
                    </div>
                </motion.div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Timeline;
