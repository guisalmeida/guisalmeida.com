import React from 'react';
import PropTypes from 'prop-types';

import { MainContent } from '../../styles/base';

const Author = ({ fullText }) => {

    return (
        <MainContent>
            {fullText && 
            <h1>Sobre mim</h1>}
            <p>Olá sou Guilherme Almeida, profissional criativo e inovador, atuo como designer e desenvolvedor web na <a href="https://www.linx.com.br/transformacao-digital/linx-impulse/" target="_blank" rel="noopener noreferrer" title="Ver" itemProp="affiliation">Linx Impulse</a> e procuro estar sempre atualizado na área criativa e tecnológica.</p>
            <p>Buscando crescimento profissional e novos desafios, venho me dedicando a programação, desenvolvimento web front-end e ao curso superior de Ciência da Computação, visando me tornar um profissional mais capacitado para trabalhar com as demandas que o mercado de tecnologia oferece.</p>
            {fullText && 
            <>
            <p>No tempo livre curto praticar esportes ao ar livre, cuidar das minhas plantas, passear com meus dogs, jogar PS4 e eventualmente ler livros.</p>
            <h2><span role="img" aria-label="Habilidades">🛠️</span> Habilidades</h2>
            <ul>
                <li>HTML5</li>
                <li>CSS3 (Sass / Styled Components)</li>
                <li>CSS Frameworks (Bootstrap)</li>
                <li>Design Responsivo (Mobile First)</li>
                <li>Javascript (Jquery / ES6/7)</li>
                <li>ReactJS / Redux / Flux</li>
                <li>NodeJS</li>
                <li>Automatizadores (Gulp / Webpack)</li>
                <li>Git</li>
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














