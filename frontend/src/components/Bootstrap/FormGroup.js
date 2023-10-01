import React from "react";

const FormGroup = ({
  Id,
  Label,
  Type,
  onChange,
  Value,
  defaultValue,
  Checked,
  defaultChecked,
  Placeholder,
  readOnly,
  Desc
}) => {
  return (
    <div className="form-group my-4 border p-2 rounded-md">
      <label htmlFor={Id} className="text-sm block py-1 font-medium">{Label}</label>
      <input
        type={Type}
        className="form-control block w-96 border py-1 px-2 rounded-sm text-sm capitalize outline-gray-200"
        id={Id}
        name={Id}
        onChange={onChange}
        value={Value}
        placeholder={Placeholder}
        defaultValue={defaultValue}
        checked={Checked}
        defaultChecked={defaultChecked}
        aria-describedby={Id + "Help"}
        readOnly={readOnly}
      />
      {Desc && (
        <small id={`${Id}-help`} className="text-gray-500 text-xs">
          {Desc}
        </small>
      )}
    </div>
  );
};

export default FormGroup;