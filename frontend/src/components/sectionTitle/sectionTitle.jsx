import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateExperience, updateSkills, updateAwards, updateInterests, updateEducation, updateProjects } from '../Form/Experience/actions';

export const SectionTitle = ({ initialTitle, titleType }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(initialTitle);

  const dispatch = useDispatch();

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    switch (titleType) {
      case 'experience':
        dispatch(updateExperience(title));
        break;
      case 'skills':
        dispatch(updateSkills(title));
        break;
      case 'awards':
        dispatch(updateAwards(title));
        break;
      case 'interests':
        dispatch(updateInterests(title));
        break;
      case 'education':
        dispatch(updateEducation(title));
        break;
      case 'projects':
      dispatch(updateProjects(title));
      break;
      default:
        break;
    }
  };

  return (
    <h3 className='p-2 rounded-t-lg bg-gray-200' onDoubleClick={handleDoubleClick}>
      {isEditing ? (
        <input className='dark:bg-zinc-800' type="text" value={title} onBlur={handleBlur} onChange={handleChange} autoFocus />
      ) : (
        title
      )}
    </h3>
  );
};

