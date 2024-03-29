import { GetStaticProps } from "next";
import Image from "next/image";
import {
  FaBloggerB,
  FaCodepen,
  FaGithubAlt,
  FaLinkedinIn,
} from "react-icons/fa";
import styled from "styled-components";

import IconLink from "@/components/iconLink";
import PageContainer from "@/components/pageContainer";
import { RegularH1 } from "@/components/styledComponents";
import { TextLink } from "@/components/textLink";
import { PortfolioData } from "@/static/type";
import { AppTheme } from "@/styles/theme";
import { getLocalData } from "@/utils/getLocalData";

type Props = {
  content: PortfolioData;
};

const Contact = ({ content }: Props) => {
  return (
    <PageContainer
      index={3}
      background={AppTheme.colors["bg-contact"]}
      fullHeight={false}
      gap='2rem'
    >
      <Polygon>
        <Image src='/photo.jpeg' width={300} height={400} alt='foto' />
      </Polygon>

      {/* <FlexContainer>
        <TextLink
          href='lebenslauf-chuxiao.jiang.pdf'
          className='link__cv'
          color='#fcc60a'
          target='_blank'
        >
          Download CV
        </TextLink>
      </FlexContainer> */}

      <FlexContainer>
        <Title color={AppTheme.colors["font-light"]}>
          {content.contact.title}
        </Title>

        <TextLink
          href={`mailto:${content.contact.email}`}
          target='_blank'
          rel='noreferrer'
          className='link__email'
          color='#fcc60a'
        >
          {content.contact.email}
        </TextLink>
      </FlexContainer>

      <FlexContainer>
        <SubTitle>{content.contact.subtitle}</SubTitle>
        <ContactPanel>
          <IconLink linkURL='https://github.com/YiDaoJ' title='Github'>
            <FaGithubAlt />
          </IconLink>
          <IconLink
            linkURL='https://yidaoj-blog.vercel.app/'
            title='Personal Blog'
          >
            <FaBloggerB />
          </IconLink>
          <IconLink
            linkURL='https://www.linkedin.com/in/chuxiao-jiang-406b0b239/'
            title='LinkedIn'
          >
            <FaLinkedinIn />
          </IconLink>
          <IconLink linkURL='http://codepen.io/yidaoJ/' title='CodePen'>
            <FaCodepen />
          </IconLink>
          {/* <IconLink linkURL='https://www.facebook.com/chuxiao.jiang' title='FaceBook'>
            <FaFacebookSquare />
          </IconLink> */}
        </ContactPanel>
      </FlexContainer>
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

export default Contact;

export const Title: any = styled(RegularH1)`
  color: ${({ color, theme }) => color || theme.colors.font};
  font-size: 3rem;
  font-weight: 300;
  line-height: 150%;
  margin: 0;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.laptop_s}) {
    font-size: 2.2rem;
    margin: 1rem 0;
  }

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-bottom: 3rem;

  @media only screen and (max-width: ${({ theme }) =>
    theme.breakpoints.mobile}) {
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 1rem;
  } */

  .link__email,
  .link__cv {
    font-size: 1.5rem;
    font-weight: 500;

    @media only screen and (max-width: ${({ theme }) =>
        theme.breakpoints.mobile}) {
      font-size: 1.2rem;
      font-weight: 400;
    }
  }
`;

const SubTitle = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors["font-light"]};
  font-weight: 300;
  letter-spacing: 0;
  margin-bottom: 2rem;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
    font-size: 1.3rem;
    font-weight: 400;
  }
`;

const ContactPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  width: 100%;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
    gap: 1.5rem;
  }
`;

const Polygon = styled.div`
  width: 300px;
  height: 300px;
  background-color: #fcc60a;

  -webkit-clip-path: polygon(
    50% 0%,
    83% 12%,
    100% 43%,
    94% 78%,
    68% 100%,
    32% 100%,
    6% 78%,
    0% 43%,
    17% 12%
  );
  clip-path: polygon(
    50% 0%,
    83% 12%,
    100% 43%,
    94% 78%,
    68% 100%,
    32% 100%,
    6% 78%,
    0% 43%,
    17% 12%
  );

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
    width: 200px;
    height: 200px;
  }
`;
