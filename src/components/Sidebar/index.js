import React from 'react';
import Profile from '../Profile';
import Social from '../Social';
import Menu from '../Menu';

import * as S from './styled';


const Sidebar = () => (
    <S.SidebarWrapper>
        <Profile />
        <Social />
        <Menu />
    </S.SidebarWrapper>

)

export default Sidebar;