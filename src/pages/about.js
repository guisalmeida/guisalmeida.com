import React from 'react';

import Layout from "../components/Layout";
import SEO from "../components/seo";
import Author from "../components/Author";
import Avatar from "../components/Avatar";

const AboutPage = () => (
    <Layout>
        <SEO
            title="About"
            description="Learn a little more about the developer behind this site."
        />
        <Avatar />
        <Author fullText={true} />
    </Layout >
);

export default AboutPage;