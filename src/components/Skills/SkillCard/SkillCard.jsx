import "./SkillCard.css";

const SkillCard = ({ title, iconUrl, isActive, onCLick }) => {
    return (
        <div
            className={`skills-card ${isActive ? "active" : ""}`}
            onClick={() => onCLick()}
        >
            <div className="skill-icon">
                <img src={iconUrl} alt={title} />
            </div>

            <span>{title}</span>
        </div>
    );
};

export default SkillCard;
