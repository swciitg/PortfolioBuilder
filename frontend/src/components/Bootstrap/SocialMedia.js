import React, { useEffect, useState } from "react";


const SocialMedia = ({
  MediaData,
  value,
  onChange,
  readOnly,
}) => {
  const [allFieldsFilled, setAllFieldsFilled] = useState(0);

  console.log(MediaData[Object.keys(MediaData)[0]])

  useEffect(() => {
    if (value["Facebook"] && value["WhatsApp"] && value["Instagram"] && value["Twitter"]&& value["LinkedIn"]&& value["GitHub"] && value["StackOverflow"])
    {
      setAllFieldsFilled(7); //if all 5 five fields are filled
    } else if (value["Facebook"] || value["WhatsApp"] || value["Instagram"] || value["Twitter"] || value["LinkedIn"] || value["GitHub"] || value["StackOverflow"]) {
      setAllFieldsFilled(1); //checking if any one of them is filled but not all
    } else {
      setAllFieldsFilled(0); // if none is filled
    }
  }, [value["Facebook"],value["WhatsApp"],value["Instagram"],value["Twitter"],value["LinkedIn"],value["GitHub"],value["StackOverflow"]]);

  return (
    <div
    className={`my-4 border rounded-md flex flex-col ${
      allFieldsFilled === 7
        ? "border-green-500"
        : allFieldsFilled === 0
        ? ""
        : "border-yellow-500"
    } p-3 my-2`}>
      <div className="flex justify-between">
        <h1 className=" text-[1rem] block py-1 font-medium">Social Media</h1>
        <div className="flex gap-2 text-white text-sm items-center">
          <div className="p-2 rounded-md bg-blue-400 cursor-pointer hover:scale-[1.02]">Option 1</div>
          <div className="p-2 rounded-md bg-blue-400 cursor-pointer hover:scale-[1.02]">Option 2</div>
          <div className="p-2 rounded-md bg-blue-400 cursor-pointer hover:scale-[1.02]">Option 3</div>
        </div>
      </div>
      
      {Object.keys(MediaData).map((md) => (
        <div>
          <label htmlFor={md} className="dark:text-gray-200 text-xs block py-1 font-medium">
            {MediaData[md][1]}
          </label>
          <input
            type={MediaData[md][0]}
            className="dark:bg-zinc-800 form-control block w-full md:w-96 border py-1 px-2 rounded-sm text-sm capitalize outline-gray-200"
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
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
