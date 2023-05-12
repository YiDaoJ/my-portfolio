import React from "react";
import styled from "styled-components";

interface SkillCardProps {
  title: string;
  skills: string[];
  color?: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => {
  return (
    <SkillPointsContainer className='skill-card'>
      <div className='skill-card__title'>{title}</div>
      <div className='skill-card__divider' />
      <div className='skill-card__content'>
        {skills.map((skill) => (
          <div key={skill} className='skill-card__item'>
            {skill}
          </div>
        ))}
      </div>
    </SkillPointsContainer>
  );
};

const SkillPointsContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 0.8rem 1.5rem 1rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors["bg-card"]};
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.colors.font};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  cursor: default;
  /* gap: 1rem; */

  .skill-card__title {
    font-size: 1.3rem;
    font-weight: 500;

    @media only screen and (max-width: ${({ theme }) =>
        theme.breakpoints.mobile}) {
      font-size: 1.2rem;
      font-weight: 400;
    }
  }

  .skill-card__divider {
    width: 100%;
    height: 2px;
    background-color: ${(props) => props.theme.colors["bg-card-divider"]};
    border-radius: 0.5rem;
    margin: 0.5rem 0 1rem;
  }

  .skill-card__content {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    font-size: 1.2rem;

    @media only screen and (max-width: ${({ theme }) =>
        theme.breakpoints.mobile}) {
      gap: 1rem;
      font-size: 1rem;
    }
  }
`;

export default SkillCard;
