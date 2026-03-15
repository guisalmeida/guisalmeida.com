import React from "react";
import PropTypes from "prop-types";

import * as Base from "../../styles/base";

const Author = ({ fullText }) => {
	return (
		<>
			<Base.MainContent>
				{(fullText && <h1>About</h1>) || <h1>👋 Hi, I'm Guilherme Almeida</h1>}
			</Base.MainContent>

			<Base.MainContent>
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
					I'm a Software Developer with more than 7 years of practical experience and a bachelor's degree in Computer Science. My expertise extends across Web and Software Development, Data Structures and Algorithms, Agile Methodologies, and a strong background in design (graphic design, visual identity, and UI/UX).
				</p>
				<p>
					Interested in professional growth and willing to embrace new technologies. I am also enthusiastic about sharing knowledge and working collaboratively as a team.
				</p>

				{fullText && (
					<>
						<p>
							Beyond my professional interests, I cherish moments spent with my family,
							my wife, my daughter and our beloved dogs.
							I have a love for skateboarding, also like to run and enjoy cooking
							vegetarian recipes.
						</p>
						<h2>Skills</h2>
						<p>
							Over the course of my career, I've already had the privilege of contributing
							to various companies and projects. This diverse journey has provided me with a
							holistic understanding of the software development.
						</p>

						<p>
							Experienced in the <strong>JavaScript/TypeScript</strong> ecosystem. Proven experience building scalable applications using <strong>Angular, React, Vue, Node.js (Express), Python (Flask), Java, PostgreSQL, MongoDB, Docker, AWS, and CI/CD pipelines with GitHub Actions</strong>.
						</p>

						<p>
							I am well-equipped to contribute effectively to projects, bringing a
							blend of technical proficiency and creative insight. My adaptability
							and dedication to staying up-to-date with industry trends make me an
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
		</>
	);
};

Author.propTypes = {
	fullText: PropTypes.bool,
};

export default Author;
