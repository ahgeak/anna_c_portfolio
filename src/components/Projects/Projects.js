import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chore from "../../Assets/Projects/family-chore-planner-screenshot.png";
import packing from "../../Assets/Projects/PackingList_Screenshot.png";
import book from "../../Assets/Projects/Screenshot_Book_Search_Engine.png";
import jate from "../../Assets/Projects/jate_screenshot.png";
import weather from "../../Assets/Projects/WeatherDashboardScreenshot.png";
import note from "../../Assets/Projects/Note_taker_screenshot.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chore}
              isBlog={false}
              title="Family Chore Planner"
              description="A full stack program that empowers parents and children alike to effortlessly manage household chores and earnings. Technologies used: MongoDB, Express, React, Node, JSON Web Token, Apollo, Chakra"
              ghLink="https://github.com/Four-Moons-Tech/Family-Chore-Planner"
              demoLink="https://family-chore-planner.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={packing}
              isBlog={false}
              title="Packing List"
              description="A program to help you plan your upcoming trip by creating a packing list. Technologies used: Node, Express, mySQL, Bcrypt, Sequelize, Figma, JawsDB, Materialized, Handlebars.js"
              ghLink="https://github.com/ahgeak/packing_list_travel_planner"
              demoLink="https://shielded-earth-91970-0db761988706.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={book}
              isBlog={false}
              title="Book Search Engine"
              description="Google Books API search engine that allows users to search for books they would like to read and save a list of books to their profile. Technologies used: MongoDB, Express, React, Node, GraphQL"
              ghLink="https://github.com/ahgeak/book_search_engine"
              demoLink="https://book-search-engine-70lp.onrender.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jate}
              isBlog={false}
              title="Web Browser Text Editor"
              description="A Progressive Web Application text editor program that runs in the browser. Technologies used: JavaScript, Webpack, Workbox, Render, IndexedDB"
              ghLink="https://github.com/ahgeak/text_editor_progressive_web_app"
              demoLink="https://text-editor-progressive-web-app.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Trip Planner"
              description="Program to plan a trip based on the upcoming local weather of searched cities. Technologies used: JavaScript, third party API, CSS, HTML"
              ghLink="https://github.com/ahgeak/weather-dashboard-trip-planner"
              demoLink="https://ahgeak.github.io/weather-dashboard-trip-planner/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={note}
              isBlog={false}
              title="Note Taker"
              description="Note Taker is a program to help with keeping track of your tasks. The user can enter their notes, click the save button to store the notes and also click the delete button to remove notes. Technologies used: JavaScript, CSS, HTML, Heroku, CRUD API Requests"
              ghLink="https://github.com/ahgeak/note_taker"
              demoLink="https://gentle-lake-68304-246fd0ade036.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
