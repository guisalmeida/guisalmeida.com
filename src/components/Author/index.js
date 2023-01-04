import React from 'react';
import PropTypes from 'prop-types';

import * as Base from '../../styles/base';

const Author = ({ fullText }) => {
    return (
        <Base.MainContent>
            {fullText && 
            <h1>About</h1> || <h1>Hello</h1>}
            <p>I'm a Full Stack developer, graduated in Computer Science (2022), and +4 years of experience in software development. I worked on several projects, primarily in web development and mainly using Javascript, Python, and Java. Responsible for creating very understandable and functional code.</p>
            <p>I am passionate about learning new technologies and challenging jobs, sharing knowledge, and teamwork.</p>
            {fullText && 
            <>                
                <h2><span role="img" aria-label="Skills">🛠️</span> Skills</h2>
                <ul>
                    <li>Javascript (Typescript / ES6+ / NodeJS / Jquery)</li>
                    <li>Frameworks (ReactJS / VueJS)</li>
                    <li>HTML5 (SEO / Acessibility)</li>
                    <li>CSS3 (Sass / Styled Components)</li>
                    <li>Responsive Design (Mobile First)</li>
                    <li>Bundle tools (Webpack / Gulp)</li>
                    <li>TDD testing (Cypress / Mocha / Jest)</li>
                    <li>Git / Github / Gitlab</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>Database (PostgreSQL / GraphQL)</li>
                    <li>Agile Methodologies (Scrum / Kanban)</li>
                </ul>
                <h2>Contact</h2>
                <p>
                    You con contact me through my social media or by e-mail <a href="mailto:guisalmeida.dev@gmail.com" target="_blank" rel="noreferrer">guisalmeida.dev@gmail.com</a>.
                </p>
            </>}
        </Base.MainContent>
    )
}

Author.propTypes = {
    fullText: PropTypes.bool
}

export default Author
