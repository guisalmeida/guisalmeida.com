import React from 'react';

import Author from '../components/Author';
import Layout from '../components/Layout'
import HomeList from '../components/HomeList'
import SEO from '../components/seo'


const HomePage = () => (
    <Layout>
        <SEO title='Projetos' />
        <Author fullText={false} />
        <HomeList />
    </Layout>
);

export default HomePage;