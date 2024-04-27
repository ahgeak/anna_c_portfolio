import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chore from "../../Assets/Projects/family-chore-planner-screenshot.png";
import packing from "../../Assets/Projects/PackingList_Screenshot.png";
import book from "../../Assets/Projects/Screenshot_Book_Search_Engine.png";
import jate from "../../Assets/Projects/jate_screenshot.png";

// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

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
              description="A program to help you plan your upcoming trip by creating a packing list. Technologies used: Node, Express, Handlebars.js, mySQL, Sequelize, Materialized, Figma, JawsDB, Bcrypt"
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
              imgPath={chore}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chore}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
