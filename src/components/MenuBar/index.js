import React, { useState, useEffect } from 'react';

import { Home } from "@styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "@styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-regular/UpArrowAlt"
import { InvertColors } from "@styled-icons/material/InvertColors"
import { Grid } from "@styled-icons/boxicons-solid/Grid"
import { ThList as List } from "@styled-icons/typicons/ThList"

import getThemeColor from '../../utils/getThemeColor';

import * as S from './styled';

const MenuBar = () => {
    const [theme, setTheme] = useState(null);
    const [display, setDisplay] = useState(null);

    const isLightMode = theme === 'light';
    const isListMode = display === 'list';

    useEffect(() => {
        setTheme(window.__theme);
        setDisplay(window.__display);
        window.__onThemeChange = () => setTheme(window.__theme);
        window.__onDisplayChange = () => setDisplay(window.__display);
    }, []);

    return (
        <S.MenuBarWrapper>
            <S.MenuBarGroup>
                <S.MenuBarLink
                    to='/'
                    title='Voltar para home'
                    cover
                    direction="right"
                    bg={getThemeColor()}
                    duration={0.6}
                >
                    <S.MenuBarItem>
                        <Home />
                    </S.MenuBarItem>
                </S.MenuBarLink>

                <S.MenuBarLink
                    to='/search/'
                    title='Pesquisar'
                    cover
                    direction="right"
                    bg={getThemeColor()}
                    duration={0.6}
                >
                    <S.MenuBarItem>
                        <Search />
                    </S.MenuBarItem>
                </S.MenuBarLink>

            </S.MenuBarGroup>

            <S.MenuBarGroup>
                <S.MenuBarItem
                    title='Mudar o tema'
                    onClick={() => {
                        window.__setPreferredTheme(isLightMode ? 'dark' : 'light')
                    }}
                    className={theme}
                >
                    <InvertColors />
                </S.MenuBarItem>

                <S.MenuBarItem
                    title='Mudar vizualização'
                    onClick={() => {
                        window.__setPreferredDisplay(isListMode ? 'grid' : 'list')
                    }}
                    className="display"
                >
                    {isListMode ? <Grid /> : <List />}
                </S.MenuBarItem>

                <S.MenuBarItem
                    title='Ir para o topo'
                    onClick={() => {
                        window.scroll({ top: 0, behavior: 'smooth' })
                    }}
                >
                    <Arrow />
                </S.MenuBarItem>
            </S.MenuBarGroup>
        </S.MenuBarWrapper>
    )
};

export default MenuBar;