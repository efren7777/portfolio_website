import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const projecstDemo = [{
  title:'Project 1',
  description:'This is a really long description'
},{
  title:'Project 2',
  description:'This is a really long description'
},{
  title:'Project 3',
  description:'This is a really long description'
},{
  title:'Project 3',
  description:'This is a really long description'
}];

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((project) => (
        <BlogCard key ={project.id}>
          <Img src={project.image} />
          <HeaderThree title>{project.title}</HeaderThree>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;