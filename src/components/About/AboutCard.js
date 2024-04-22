import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anna Chuapetcharasopon </span>
            originally from <span className="purple"> Utqiagvik, Alaska</span> the northern most city in Alaska.
            <br />
            <br />
            I have a Bachelor degree from <span className="purple">Dartmouth College</span> with a double major in Film & Media Studies and Native American Studies. I have also have a Master of Arts degree in Education from <span className="purple">Stanford University</span> focusing on Learning, Design, and Technology. I have worked for over ten years in the field of education. I have completed a Full Stack Web Development Bootcamp from <span className="purple">UC Berkeley</span> and have a strong foundation in the <span className="purple">MERN stack</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Board Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Camping and Hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
