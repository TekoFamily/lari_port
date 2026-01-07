import React from 'react';
import { CircleDot } from 'lucide-react';

const softSkills = [
    "Communication",
    "Problem-Solving",
    "Collaboration",
    "Empathy"
];

const hardSkills = [
    "User Research and Usability Testing",
    "Figma",
    "Design Thinking",
    "Accessibility"
];

const SkillLists = () => {
    return (
        <section className="section-padding skill-lists-section">
            <div className="container">
                <div className="lists-grid">

                    {/* Soft Skills Column */}
                    <div className="list-column">
                        <h3 className="list-title">Soft Skills</h3>
                        <ul className="custom-list">
                            {softSkills.map((item, index) => (
                                <li key={index} className="list-item">
                                    <CircleDot className="list-icon" size={20} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Hard Skills Column */}
                    <div className="list-column">
                        <h3 className="list-title">Hard Skills</h3>
                        <ul className="custom-list">
                            {hardSkills.map((item, index) => (
                                <li key={index} className="list-item">
                                    <CircleDot className="list-icon" size={20} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SkillLists;
