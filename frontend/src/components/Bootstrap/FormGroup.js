import React from 'react';

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
	Desc,
	borderColor, // Add the borderColor prop
}) => {
	return (
		<div className={`form-group my-4 border ${borderColor} p-2 rounded-md`}>
			<label htmlFor={Id} className='text-sm block py-1 font-medium'>
				{Label}
			</label>
			<input
				type={Type}
				className='dark:bg-zinc-800 form-control block w-full border py-2 px-3 rounded-sm text-sm outline-gray-200'
				id={Id}
				name={Id}
				onChange={onChange}
				value={Value}
				placeholder={Placeholder}
				defaultValue={defaultValue}
				checked={Checked}
				defaultChecked={defaultChecked}
				aria-describedby={Id + 'Help'}
				readOnly={readOnly}
			/>
			{Desc && (
				<small
					id={`${Id}-help`}
					className='dark:text-gray-400 text-gray-500 text-xs'
				>
					{Desc}
				</small>
			)}
		</div>
	);
};

export default FormGroup;
