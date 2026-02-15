import React from "react";
import PropTypes from "prop-types";

import * as Base from "../../styles/base";

const Author = ({ fullText }) => {
	return (
		<Base.MainContent>
			{(fullText && <h1>About</h1>) || <h1>Hello!</h1>}
			{!fullText && (
				<>
					<p>
						Welcome to my dedicated space for sharing insights and showcasing a
						selection of my software development projects. Here, you'll find a
						collection of articles and a portfolio that provides a glimpse into
						my journey in the world of software development.
					</p>
				</>
			)}

			<p>
				I'm a Full Stack Developer with more than 6 years of practical experience and a bachelor's degree in Computer Science. My expertise extends across Web and Software Development, Data Structures and Algorithms, Agile Methodologies, and a strong background in design (graphic design, visual identity, and UI/UX). 
			</p>
			<p>
				Interested in professional growth and willing to embrace new technologies. I am also enthusiastic about sharing knowledge and working collaboratively as a team.
			</p>

			{fullText && (
				<>
					<p>
						Beyond my professional interests,
						I have a love for skateboarding and enjoy experimenting with
						vegetarian recipes. In my free time, I cherish moments spent with my
						wife and our beloved dogs.
					</p>
					<h2>Skills</h2>
					<p>
						Over the course of my career, I've had the privilege of contributing
						to various companies, initially as a designer and evolving into a
						developer over time. This diverse journey has provided me with a
						holistic understanding of different design patterns and tools.
					</p>

					<p>
						I've immersed myself in exploring and mastering various
						technologies, and I'm comfortable working with some listed the
						following:
					</p>

					<ul>
						<li>
							<strong>Languages:</strong> Javascript, Typescript, Java, Python;
						</li>
						<li>
							<strong>Frameworks:</strong> Angular, React, Vue;
						</li>
						<li>
							<strong>Web Development:</strong> HTML5, CSS3, SEO, Accessibility, Sass, Styled Components, Tailwind;
						</li>
						<li>
							<strong>Automation testing:</strong> Cypress, Jest, Pytest, Junit;
						</li>
						<li>
							<strong>State Management:</strong> NgRx, Redux, Vuex;
						</li>
						<li>
							<strong>Control Versioning:</strong> Git, Github;
						</li>
						<li>
							<strong>APIs:</strong> Node.js, Express.js, Python, Flask;
						</li>
						<li>
							<strong>Databases:</strong> Mysql, PostgreSQL, MongoDB;
						</li>
						<li>
							<strong>Design UX/UI:</strong> Storybook, Figma, Adobe Photoshop, Adobe Illustrator;
						</li>
						<li>
							<strong>Infrastructure:</strong> Docker, Github Actions, AWS;
						</li>
						<li>
							<strong>Agile Methodologies:</strong> Scrum, Kanban.
						</li>
					</ul>

					<p>
						I am well-equipped to contribute effectively to projects, bringing a
						blend of technical proficiency and creative insight. My adaptability
						and dedication to staying abreast of industry trends make me an
						asset in dynamic and collaborative work environments.
					</p>

					<h2>Keep in touch</h2>
					<p>
						Feel free to reach out to me through my social media or drop me an email at{" "}
						<a
							href="mailto:hello@guisalmeida.com"
							target="_blank"
							rel="noreferrer"
						>
							hello@guisalmeida.com
						</a>
						. I look forward to connecting with you!
					</p>
				</>
			)}
		</Base.MainContent>
	);
};

Author.propTypes = {
	fullText: PropTypes.bool,
};

export default Author;
