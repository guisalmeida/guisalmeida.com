import React from 'react';

import Icons from './Icons';
import links from './content';

import * as S from './styled';

const Social = () => (
    <S.SocialWrapper>
        <S.SocialList>
            {links.map((link, index) => {
                const Icon = Icons[link.label];

                return (
                    <li key={index}>
                        <a
                            href={link.url}
                            title={link.label}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <S.IconWrapper>
                                <Icon />
                            </S.IconWrapper>
                        </a>
                    </li>
                )
            })}
        </S.SocialList>
    </S.SocialWrapper>
);

export default Social;