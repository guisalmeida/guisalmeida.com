import React from 'react';
import PropTypes from 'prop-types';

import * as Base from '../../styles/base';

const Author = ({ fullText }) => {
    return (
        <Base.MainContent>
            {fullText && <h1>About</h1> || <h1>Hello!</h1>}
            <p>Welcome to my dedicated space for sharing insights and showcasing a selection of my software development projects. Here, you'll find a collection of articles and a portfolio that provides a glimpse into my journey in the world of software development.</p>
            <p>I'm a dedicated Software Engineer with a Bachelor's degree in Computer Science and over 4 years of hands-on experience in software development. My journey began in the creative field, having spent approximately 6 years as a designer before making the leap into development.
            </p>
            {/* <p>My expertise lies primarily in web development, where I have successfully executed various projects using technologies such as Javascript, React.js, Vue.js, NodeJS, and Python. Consistently delivering code that is not only functional but also clean and easily readable. </p> */}
            
            {fullText && 
            <>
                <p>My passion for continual growth is evident in my eagerness to embrace new technologies and take on challenging tasks. I am equally enthusiastic about sharing my expertise and thrive when working collaboratively as part of a team.
                Beyond my professional interests, I have a love for skateboarding and enjoy experimenting with vegetarian recipes. In my free time, I cherish moments spent with my wife and our beloved dogs.</p>
                <h2>Skills</h2>
                <p>Over the course of my career, I've had the privilege of contributing to various companies, initially as a designer and evolving into a developer over time. This diverse journey has provided me with a holistic understanding of different design patterns and tools. My expertise extends across Web Development, Software Development, Graphic Design, Data Structures and Algorithms, and Agile Methodologies.</p>

                <p>I've immersed myself in exploring and mastering various technologies, and I'm comfortable working with some listed the following:</p>

                <ul>
                    <li><strong>Javascript:</strong> ES6+, Node.js, Typescript;</li>
                    <li><strong>Python:</strong> Flask, Pytest;</li>
                    <li><strong>Java</strong>;</li>
                    <li><strong>Frameworks:</strong> React.js, Vue.js;</li>
                    <li><strong>State Management:</strong> Redux, Apollo Client (Graphql);</li>
                    <li><strong>HTML5:</strong> SEO, Accessibility;</li>
                    <li><strong>CSS3:</strong> Sass, Styled Components;</li>
                    <li><strong>Design:</strong> Figma, Adobe XD, Adobe Photoshop, Adobe Illustrator;</li>
                    <li><strong>Responsive Design:</strong> Mobile First;</li>
                    <li><strong>Testing:</strong> TDD, Cypress, Mocha, Jest;</li>
                    <li><strong>Version Control:</strong>Git, Github, Gitlab;</li>
                    <li><strong>REST APIs</strong>;</li>
                    <li><strong>Database:</strong> PostgreSQL, GraphQL;</li>
                    <li><strong>Containerization:</strong> Docker;</li>
                    <li><strong>Agile Methodologies:</strong> Scrum, Kanban.</li>
                </ul>

                <p>I am well-equipped to contribute effectively to projects, bringing a blend of technical proficiency and creative insight. My adaptability and dedication to staying abreast of industry trends make me an asset in dynamic and collaborative work environments.</p>

                <h2>Keep in touch</h2>
                <p>
                Feel free to reach out to me through my social media platforms (icons on the left) or drop me an email at <a href="mailto:guisalmeida.dev@gmail.com" target="_blank" rel="noreferrer">guisalmeida.dev@gmail.com</a>. I look forward to connecting with you!
                </p>
            </>}
        </Base.MainContent>
    )
}

Author.propTypes = {
    fullText: PropTypes.bool
}

export default Author
