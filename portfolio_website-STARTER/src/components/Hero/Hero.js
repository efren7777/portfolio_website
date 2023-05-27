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
        This is just a cool portfolio project to show off
      </SectionText>
      <Button onClick={() => window.location='https://google.com'}> Google</Button>

    </LeftSection>
  </Section>
);

export default Hero;