import React from 'react';
import { DiFirebase, DiReact, DiLinux, DiPython, DiCss3Full, DiHtml5, DiPostgresql, DiMysql, DiMongodb, DiJavascript1, DiTerminal, DiApple, DiWindows, DiDebian, DiUbuntu, DiRedhat} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Background</SectionTitle>
    <SectionText>
      Professionally, my experience is focused on Fintech Systems operations and site reliability.
      <br />
      <br />
      Personally, my experience includes a larger range of interests, including Artificial Intelligence, Quantitative Trading, Web Development, and Robotics.
    </SectionText>

    <Section>
      <SectionTitle>Language Experience</SectionTitle>
    </Section>
    <List>
      <ListItem>
        <picture>
          <DiPython size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Python</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiJavascript1 size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>JavaScript</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiTerminal size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Shell Scripting</ListTitle>
        </ListContainer>
      </ListItem>
    </List>

    <Section>
      <SectionTitle>OS Experience</SectionTitle>
    </Section>
    <List>
      <ListItem>
        <picture>
          <DiLinux size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Linux</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiApple size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Mac OS</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiWindows size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Windows</ListTitle>
        </ListContainer>
      </ListItem>
    </List>

    <Section>
      <SectionTitle>Front End Experience</SectionTitle>
    </Section>

    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>React</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCss3Full size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>CSS</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiHtml5 size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>HTML</ListTitle>
        </ListContainer>
      </ListItem>

    </List>


    <Section>
      <SectionTitle>DB Experience</SectionTitle>
    </Section>


    <List>
      <ListItem>
        <picture>
          <DiMongodb size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>MongoDB</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiMysql size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>MySQL</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiPostgresql size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>PostgreSQL</ListTitle>
        </ListContainer>
      </ListItem>

    </List>


    <Section>
      <SectionTitle>Linux Experience</SectionTitle>
    </Section>
    <List>
      <ListItem>
        <picture>
          <DiRedhat size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Red Hat</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiUbuntu size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Ubuntu</ListTitle>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiDebian size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Debian</ListTitle>
        </ListContainer>
      </ListItem>
    </List>


    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;