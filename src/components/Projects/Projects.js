import React from "react";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main> Projects </SectionTitle>
    <GridContainer>
      {projects.map((project) => (
        <BlogCard key={project.id}>
          <Img src={project.image} alt="project" />

          <TitleContent>
            <HeaderThree title>{project.title}</HeaderThree>
            <Hr />
          </TitleContent>

          <CardInfo>{project.description}</CardInfo>

          <div>
            <TitleContent> Stack </TitleContent>
            <TagList>
              {project.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </TagList>
          </div>

          <UtilityList>
            <ExternalLinks href={project.visit}> View Project </ExternalLinks>
            <ExternalLinks href={project.source}> Source Code </ExternalLinks>
          </UtilityList>

        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
