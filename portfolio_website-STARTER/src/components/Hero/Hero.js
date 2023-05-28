import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        my portfolio
      </SectionTitle>
      <SectionText>
      The purpose of this website is to document the life of myself. I hope you enjoy it!
      </SectionText>
      <Button onClick={() => window.location='https://github.com/efren7777'}> Github</Button>

    </LeftSection>
  </Section>
);

export default Hero;