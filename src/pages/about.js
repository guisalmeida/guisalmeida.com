import React from 'react';

import Layout from "../components/Layout";
import SEO from "../components/seo";

import { MainContent } from '../styles/base';

const AboutPage = () => (
    <Layout>
        <SEO
            title="Sobre mim"
            description="Saiba um pouco mais sobre o desenvolvedor por trás deste site."
        />
        <MainContent>
            <h1>Sobre mim</h1>
            <p>Olá sou Guilherme Almeida, profissional criativo e inovador, atuo como designer e desenvolvedor web e procuro estar sempre atualizado na área criativa e tecnológica.</p>
            <p>Buscando crescimento profissional e novos desafios, atualmente venho me dedicando em programação e desenvolvimento web front-end, visando me tornar um profissional mais capacitado para trabalhar com as demandas que o mercado oferece.</p>
        </MainContent>
    </Layout >
);

export default AboutPage;