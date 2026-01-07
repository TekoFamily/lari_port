import React from 'react';

const Skills = () => {
    const skills = [
        "Product Design",
        "Art Direction",
        "Frontend Development",
        "User Research",
        "Brand Strategy"
    ];

    return (
        <div className="skills-list">
            {skills.map((skill, index) => (
                <span key={index} className="skill-item">
                    {skill}
                </span>
            ))}
        </div>
    );
};

export default Skills;
