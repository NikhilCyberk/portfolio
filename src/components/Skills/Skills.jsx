import { useState } from 'react'
import { SKILLS } from '../../utils/data'
import SkillCard from './SkillCard/SkillCard'
import './Skills.css'
import SkillInfoCard from './SkillInfoCard/SkillInfoCard';

export default function Skills() {
    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
    const headingSelectSkill = (data) => {
        console.log(data);
        setSelectedSkill(data);
    }

    return (
        <section className='skills-container'>
            <h5>Technical Proficiency</h5>

            <div className='skills-content'>
                <div className='skills'>
                    {SKILLS.map((item) =>
                    (
                        <SkillCard
                            key={item.title}
                            iconUrl={item.icon}
                            title={item.title}
                            isActive={selectedSkill.title === item.title}
                            onCLick={() => {
                                headingSelectSkill(item);
                            }}
                        />
                    )
                    )}
                </div>

                <div className='skills-info'>
                    <SkillInfoCard
                        heading={selectedSkill.title}
                        skills={selectedSkill.skills}
                    />
                </div>
            </div>

        </section>
    )
}