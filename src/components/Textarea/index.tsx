import './style.css';

import React, {InputHTMLAttributes} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    name: string;
}

const Textarea: React.FC<InputProps> = ({ label, name, ...rest }) => {
    return (
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest}/>
        </div>
    );
}

export default Textarea;