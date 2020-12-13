import React, {InputHTMLAttributes} from 'react';
import './style.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    company: string;
    image: any;
    description: string;
}

const JobCard: React.FC<InputProps> = ({ company, image, description }) => {
    return (
        <div className="card">
            <img src={image} alt={company}/>
            <h3>{company}</h3>
            <p>
                {description}
            </p>
        </div>
    );
}

export default JobCard;