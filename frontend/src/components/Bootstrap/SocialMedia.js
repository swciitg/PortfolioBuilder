import React from "react";

const SocialMedia = ({
  MediaData,
  value,
  onChange,
  readOnly,
}) => {
  return (
    <div className=" form-group my-4 border p-2 rounded-md">
      <h1 className=" text-[1rem] block py-1 font-medium">Social Media</h1>
      {Object.keys(MediaData).map((md) => (
        <>
          <label htmlFor={md} className="dark:text-gray-200 text-xs block py-1 font-medium">
            {MediaData[md][1]}
          </label>
          <input
            type={MediaData[md][0]}
            className="dark:bg-zinc-800 form-control block w-96 border py-1 px-2 rounded-sm text-sm capitalize outline-gray-200"
            id={md}
            name={md}
            onChange={onChange}
            value={value[md]}
            placeholder={`Enter something for ${MediaData[md][1]}`}
            readOnly={readOnly}
          />
          {MediaData[md][2] && (
            <small id={`${md}-help`} className="dark:text-gray-400 text-gray-500 text-xs">
              {MediaData[md][2]}
            </small>
          )}
        </>
      ))}
    </div>
  );
};

export default SocialMedia;
