import React from 'react';
import { DiNodejsSmall, DiReact, DiDatabase, DiDocker } from 'react-icons/di';
import { SiAzuredevops } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle> Technologies </SectionTitle>

    <SectionText>
      In the field of web development, I have experience working with a range of technologies. From Back-end To Design
    </SectionText>

    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle> Front-End </ListTitle>
          <ListParagraph>
            React, Javascript, Next.JS <br />Framer-Motion, Animista, Material UI <br/> Chakra UI, Vite, Tailwind CSS, Styled-Components
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiNodejsSmall size="3rem" />
        <ListContainer>
          <ListTitle> Back-End </ListTitle>
          <ListParagraph>
            Node.JS, Typescript, Express, <br /> Microservices, GraphQL <br/> AWS S3, Cloudinary, Strapi
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiDatabase size="3rem" />
        <ListContainer>
          <ListTitle> Databases </ListTitle>
          <ListParagraph>
            MongoDB, SQLite, <br /> Postgres, MySQL 
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <SiAzuredevops size="2rem" />
        <ListContainer>
          <ListTitle> DevOps </ListTitle>
          <ListParagraph>
            Docker, Kubernetes, CI/CD 
          </ListParagraph>
        </ListContainer>
      </ListItem>

    </List>
  </Section>
);

export default Technologies;
