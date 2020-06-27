import React from 'react';

import Layout from "../components/Layout";
import SEO from "../components/seo";
import Author from "../components/Author";



const AboutPage = () => (
    <Layout>
        <SEO
            title="Sobre mim"
            description="Saiba um pouco mais sobre o desenvolvedor por trás deste site."
        />
        <Author fullText={true} />
    </Layout >
);

export default AboutPage;