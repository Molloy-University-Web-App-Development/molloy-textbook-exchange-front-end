import React from "react";
import "./TeamMember.css";
const TeamMember = ({ name, major, github }) => {
  return (
    <section className="team-member">
      <div class="card">
        <div className="container">
          <h4>{name}</h4>
          <p>{major}</p>
          <a href={github} target="_blank" rel="noreferrer">
            Github Page
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
