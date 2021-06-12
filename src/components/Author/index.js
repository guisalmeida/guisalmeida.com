import React from 'react';
import PropTypes from 'prop-types';

import { MainContent } from '../../styles/base';

const Author = ({ fullText }) => {

    return (
        <MainContent>
            {fullText && 
            <h1>Sobre mim</h1> || <h1>Olá</h1>}
            <p>Sou Guilherme Almeida atuo como desenvolvedor fullstack, me considero um profissional criativo e inovador onde procuro estar sempre atualizado na área de tecnológica.</p>
            <p>Buscando crescimento profissional e novos desafios, venho me dedicando a programação, desenvolvimento web e ao curso superior de Ciência da Computação, visando me tornar um profissional mais capacitado para trabalhar com as demandas que o mercado de tecnologia oferece.</p>
            {fullText && 
            <>
            <p>No tempo livre curto praticar esportes ao ar livre, cuidar das minhas plantas, passear com meus dogs, jogar PS4 e ler livros.</p>
            <h2><span role="img" aria-label="Habilidades">🛠️</span> Habilidades</h2>
            <ul>
                <li>Javascript (ES6+ / NodeJS / Jquery)</li>
                <li>ReactJS / VueJS</li>
                <li>HTML5</li>
                <li>CSS3 (Sass / Styled Components)</li>
                <li>Design Responsivo (Mobile First)</li>
                <li>Automatizadores (Webpack / Gulp)</li>
                <li>Testes TDD (Cypress / Mocha / Jest)</li>
                <li>Git / Github / Gitlab</li>
                <li>Python</li>
                <li>Java</li>
                <li>PostgreSQL</li>
                <li>Scrum e Kanban</li>
            </ul>
            <h2>Contato</h2>
            <p>
                Você pode entrar em contato comigo através de qualquer uma das minhas
                redes sociais, ou se preferir no e-mail <a href="mailto:guisalmeida.dev@gmail.com" target="_blank" rel="noreferrer">guisalmeida.dev@gmail.com</a>.
            </p>
            </>}
        </MainContent>
    )
}

Author.propTypes = {
    fullText: PropTypes.bool
}

export default Author














