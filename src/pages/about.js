import React from 'react';

import Layout from "../components/Layout";
import SEO from "../components/seo";
import Author from "../components/Author";
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => (
    <Layout>
        <SEO
            title="About"
            description="Learn a little more about the developer behind this site."
        />
        
        <StaticImage src="../images/salt-graphic-design-mh2.jpg" alt="desktop image" />

        <Author fullText={true} />
    </Layout >
);

export default AboutPage;