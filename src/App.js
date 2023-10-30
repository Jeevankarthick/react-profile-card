import "./styles.css";

const skills = [
  {
    skillName: "HTML + CSS",
    level: "advanced",
    color: "CornflowerBlue"
  },
  {
    skillName: "JavaScript",
    level: "advanced",
    color: "Yellow"
  },
  {
    skillName: "Web Design",
    level: "advanced",
    color: "LightGreen"
  },
  {
    skillName: "Git & GitHub",
    level: "intermediate",
    color: "Red"
  },
  {
    skillName: "React",
    level: "advanced",
    color: "Aquamarine"
  },
  {
    skillName: "Motoko",
    level: "beginner",
    color: "Orange"
  }
];

// Avatar
function Avatar() {
  return (
    <img className="avatar" src="profile-pic-anime.jpg" alt="profile-pic" />
  );
}

// Intro
function Intro() {
  return (
    <div>
      <h1>Jeevankarthick B</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        luctus ipsum sed nulla consectetur placerat. Morbi quam erat, rutrum vel
        mattis eget, varius ut felis. Nam et convallis nisi. Maecenas vel ipsum
        at diam tempor vulputate. Nulla porttitor in odio molestie rhoncus.
      </p>
    </div>
  );
}

// Skill-set
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => {
        return (
          <Skill
            name={skill.skillName}
            level={skill.level}
            color={skill.color}
          />
        );
      })}
    </div>
  );
}

// Skill
function Skill({ name, level, color }) {
  return (
    <div style={{ backgroundColor: color }} className="skill">
      <span>{name}</span>
      <span>
        {level === "advanced" && "💪"}
        {level === "intermediate" && "👍"}
        {level === "beginner" && "👶"}
      </span>
    </div>
  );
}

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}
