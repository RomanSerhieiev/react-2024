import React, { FC } from 'react';

interface IProps {
    label: string;
    options: { value: string, label: string }[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Form: FC<IProps> = ({ label, options, onChange }) => {
    return (
        <div>
            <label>{label}</label>
            <select onChange={onChange}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
};

export default Form;