import React from 'react';

import Layout from "../components/Layout";
import SEO from "../components/seo";

import * as S from '../components/Post/styled';

const AboutPage = () => (
    <Layout>
        <SEO title="Sobre" />
        <S.PostHeader>
            <S.PostTitle>Sobre mim</S.PostTitle>
            <S.PostDescription>
                Olá sou Guilherme Almeida, profissional criativo e inovador, atuo como designer e desenvolvedor web e procuro estar sempre atualizado na área criativa e tecnológica.
            </S.PostDescription>
            <S.PostDescription>
                Buscando crescimento profissional e novos desafios, atualmente venho me dedicando em programação e desenvolvimento web front-end, visando me tornar um profissional mais capacitado para trabalhar com as demandas que o mercado oferece.
            </S.PostDescription>
        </S.PostHeader>
        <S.MainContent>
        </S.MainContent>
    </Layout>
);

export default AboutPage;