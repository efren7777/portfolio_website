import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
<Container>
<Div1>
      <Link href="/" legacyBehavior>
        <a style={{ display: 'flex', alignItems: 'center', color:"white", marginBottom:"20px" }}>
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
  <Div2>
    <li>
      <Link href="#projects" legacyBehavior>
        <NavLink>Projects</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#tech" legacyBehavior>
        <NavLink>Background</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#about" legacyBehavior>
        <NavLink>About </NavLink>
      </Link>
    </li>
  </Div2>
  <Div3>
    <SocialIcons href="https://github.com/efren7777">
      <AiFillGithub size="3rem" />
    </SocialIcons>
    <SocialIcons href="https://www.linkedin.com/in/evan-french-/">
      <AiFillLinkedin size="3rem" />
    </SocialIcons>

  </Div3>
</Container>
);

export default Header;
