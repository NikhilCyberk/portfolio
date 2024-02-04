import './ProjectCard.css'

export default function ProjectCard({ details }) {
    return (
        <div className='project-card'>
            <h6>{details.title}</h6>

            <div className='project-card-technologies'>
                {details.technologies}
            </div>
            <ul>
                {
                    details.work.map((item) => (
                        <li key={item}>{item}</li>
                    ))
                }
            </ul>

        </div>
    )
}