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
      As a Software Developer with practical experience designing, creating, and implementing solutions using a variety of technologies and programming languages, I enjoy learning about and utilizing new technologies. In my spare time, I like reading, researching, going to the movies, and taking photos to preserve special moments.
    </SectionText>
    <Button onClick={()=> window.location="https://LinkedIn.com"}>Learn More</Button>
  </LeftSection>
  </Section>
);

export default Hero;