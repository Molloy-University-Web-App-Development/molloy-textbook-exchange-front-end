import React from "react";
import TeamMember from "../components/TeamMember";
import "./Team.css";
const Team = () => {
  return (
    <section className="team">
      <TeamMember
        name="Robert Tineo Castro"
        major="Computer Science"
        github="https://github.com/RTC-13"
      />
      <TeamMember
        name="Madeline Kraemer"
        major="New Media"
        github="https://github.com/MadelineMolloy"
      />
      <TeamMember
        name="Nicolas Tundis"
        major="Computer Science"
        github="https://github.com/Blaze1358"
      />
    </section>
  );
};

export default Team;
