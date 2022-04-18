import React from 'react'
import styled from 'styled-components'
import { slideIn } from './styles'

export const Contact: React.VFC = () => {
  return <ContactContainer>contact</ContactContainer>
}

const ContactContainer = styled.div`
  position: absolute;
  height: 100%;
  width: calc(100% - 180px);
  margin-left: 180px;
  background-color: #e8eaf6;
  animation: ${slideIn} 1s ease 1;
`

// const ContactPanel = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   gap: 1rem;
//   width: 100%;
// `

// const StyledEmail = styled.div`
//   text-align: center;
// 	font-size: 1.3rem;
//   margin-bottom: 3rem;
//   font-weight: 400;

//   a:link {
//     color: #F5DB3B;
//     text-decoration: none;
//     transition: all 300ms ease;
//   }

//   a:visited {
//     color: #F5DB3B;
//   }

//   a:hover {
//     color: white;;
//   }

// `

export default Contact
