import React from 'react';
import PropTypes from 'prop-types';

import * as Base from '../../styles/base';

const Author = ({ fullText }) => {
    return (
        <Base.MainContent>
            {fullText && 
            <h1>About</h1> || <h1>Hello!</h1>}
            <p>I'm a Software Engineer focusing on Front End Development, graduated with a Bachelor's of Computer Science (2022), and +4 years of experience in software development.
            I worked on several projects, primarily in web development and mainly using Javascript, nodeJS, and Python. Responsible for creating very understandable and functional code. </p>
            <p>I'm passionate about learning new technologies and challenging jobs, sharing knowledge, and teamwork.</p>
            {fullText && 
            <>
                <h2>Skills</h2>
                <p>As long as I started my career, I worked as a designer for about 6 years before becoming a developer, then I also have extensive knowledge of some design patterns and tools. I have Experience in Web Development, Software Development, Graphic Design, Computer Science, and Agile Methodologies.</p>

                <p>I have worked with and studied different technologies, and below are some that I feel comfortable to work:</p>

                <ul>
                    <li>Javascript (Typescript / ES6+ / NodeJS / Jquery)</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>Frameworks (ReactJS / VueJS)</li>
                    <li>HTML5 (SEO / Accessibility)</li>
                    <li>CSS3 (Sass / Styled Components)</li>
                    <li>Design (Figma / Adobe XD / Adobe Photoshop / Adobe Illustrator)</li>
                    <li>Responsive Design (Mobile First)</li>
                    <li>Bundle tools (Webpack / Gulp)</li>
                    <li>Testing (Cypress / Mocha / Jest)</li>
                    <li>Git / Github / Gitlab</li>
                    <li>REST APIs</li>
                    <li>Database (PostgreSQL / GraphQL)</li>
                    <li>Docker</li>
                    <li>Agile Methodologies (Scrum / Kanban)</li>
                </ul>

                <h2>Keep in touch</h2>
                <p>
                    You can contact me through my social media (icons on the left) or by e-mail <a href="mailto:guisalmeida.dev@gmail.com" target="_blank" rel="noreferrer">guisalmeida.dev@gmail.com</a>.
                </p>
            </>}
        </Base.MainContent>
    )
}

Author.propTypes = {
    fullText: PropTypes.bool
}

export default Author
