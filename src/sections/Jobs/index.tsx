import './style.css';

import React from 'react';
import JobCard from '../../components/JobCard';
import { Job } from '../../entities/Job';
import { JobService } from '../../services/JobService';

const Jobs: React.FC = () => {
    const service = new JobService();
    const jobs = service.getJobs();
    return (
        <div className="jobs">
            <h1>
                Experiências
            </h1>
            <p>
                Cada empresa que me orgulho de ter trabalhado :)
            </p>
            <div>
                {jobs.map((job: Job) => {
                    return (
                        <JobCard 
                            company = {job.company}
                            image = {job.image}
                            description = {job.description}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default Jobs;