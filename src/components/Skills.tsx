import { skillsData } from '../data/skillsData';
import './Skills.css';

const Skills = () => {
  return (
    <div className='skills-container'>
      <h2>Technical Skills</h2>
      <div className='skills-grid'>
        {Object.entries(skillsData).map(([skill, level]: [string, string]) => (
          <div key={skill} className='skill-item'>
            <span className='skill-name'>{skill}</span>
            <span className='skill-badge'>{level}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
