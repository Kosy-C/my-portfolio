import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Hello 👋 <br />
      I am Kosy Chinweuba, <br />
      a Full-Stack Software/Product Developer
    </SectionTitle>

    <SectionText>
      As a Software Developer with practical experience designing, creating, and implementing solutions using a variety of technologies and programming languages, I enjoy building scalable and robust web applications. I love the Art of Solving Problems. I am a Design Thinker.
    </SectionText>

    <Button onClick={()=> window.location="https://LinkedIn.com"}> Learn More </Button>
  </LeftSection>
  </Section>
);

export default Hero;