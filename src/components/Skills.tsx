import React from 'react';
import skillsData from '../data/skillsData';
import './Skills.css';

const Skills = () => {
  return (
    <div className='skills-container'>
      <h2>Technical Skills</h2>
      {Object.keys(skillsData).map((category) => {
        return (
          <div key={category} className='skills-category'>
            <h3>{category}</h3>
            <div className='skills-grid'>
              {skillsData[category].map((skill) => (
                <div key={skill.name} className='skill-item'>
                  <span className='skill-name'>{skill.name}</span>
                  <span className='skill-badge'>{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;