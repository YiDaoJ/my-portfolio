import { GetStaticProps } from "next";
import styled from "styled-components";

import PageContainer from "@/components/pageContainer";
import SkillCard from "@/components/skillCard";
import { RegularH1, StyledH2 } from "@/components/styledComponents";
import { TextLink } from "@/components/textLink";
import { PortfolioData } from "@/static/type";
import { AppTheme } from "@/styles/theme";
import { getLocalData } from "@/utils/getLocalData";

type Props = {
  content: PortfolioData;
};

const About = ({ content }: Props) => {
  return (
    <PageContainer
      index={1}
      background={AppTheme.colors["bg-about"]}
      fullHeight={false}
    >
      <Sections>
        <div className='about-section'>
          <RegularH1>{content.about.title}</RegularH1>
          <StyledH2 className='h2-flex'>
            {content.about.introductions.map((intro: string, index: number) => (
              <div key={index}>{intro}</div>
            ))}
          </StyledH2>
        </div>
        <div className='about-section'>
          <RegularH1>Skills</RegularH1>
          <SkillPointsContainer className='skills'>
            <SkillCard
              title='5+ years experience'
              skills={["HTML", "CSS", "Javascript"]}
            />
            <SkillCard
              title='3+ years experience'
              skills={["React.js", "Typescript", "Node.js", "Sass", "Git"]}
            />
            <SkillCard
              title='1 year experience'
              skills={["Vue.js", "jQuery"]}
            />
            <SkillCard
              title='Basic knowledge'
              skills={["Java", "SQL", "GraphQL", "Docker", "Kubernetes"]}
            />
          </SkillPointsContainer>
        </div>
        <div className='about-section'>
          <RegularH1>{content.about.certification_title}</RegularH1>
          <div className='about-section__links-container'>
            <TextLink href='certificate-k8s.pdf'>
              <span>Kubernetes for the Absolute Beginners</span>
            </TextLink>
            <TextLink href='certificate-gatsby.pdf'>
              <span>Master Gatsby</span>
            </TextLink>
          </div>
        </div>
      </Sections>
    </PageContainer>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const content: PortfolioData = await getLocalData();

  return {
    props: {
      content,
    },
  };
};

export default About;

const SkillPointsContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-sizing: border-box;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.laptop_l}) {
    width: 90%;
  }

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.laptop_s}) {
    width: 100%;
  }
`;

const Sections = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.laptop_s}) {
    gap: 3rem;
  }

  .about-section {
    width: 80%;
    justify-self: center;
    align-self: center;

    display: flex;
    flex-direction: column;
    align-items: center;

    .about-section__links-container {
      font-size: 1.3rem;
      font-weight: 400;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      a {
        text-align: center;
      }

      @media only screen and (max-width: ${({ theme }) =>
          theme.breakpoints.mobile}) {
        font-size: 1.1rem;
        font-weight: 400;
      }
    }
  }
`;
