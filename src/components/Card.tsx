import React, { useState } from 'react'
import styled from 'styled-components'
import { MdOutlineClose } from 'react-icons/md'


interface CardProps {
  title: string
  imgURL: string
}

export const Card:React.VFC<CardProps> = ({title, imgURL}) => {

  const [ openContent, setOpenContent ] = useState<boolean>(false)

  

  return (
    <>
    <StyledCard onClick={() => setOpenContent(true)}>
      <Border />
      <img src={imgURL} alt={title} />
      <h1>{title}</h1>
    </StyledCard>
    <Modal className='modal' isOpen={openContent}>
      <CloseAction onClick={() =>setOpenContent(false)} className="close-content">
          <MdOutlineClose  />
      </CloseAction>
      
      <OpenContent className='open-content'>
        {/* <a href="#" id="close-content" class="close-content"><span class="x-1"></span><span class="x-2"></span></a> */}

        
        <div className="text" id="open-content-text">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 

  Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 

  Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. 
        </div>
        <div className='img-container'>
          <img  src={imgURL} alt={title} />
        </div>
       
        
      </OpenContent>
    </Modal>
    </>
  )
}

const StyledCard = styled.div`
  /* width: 20rem; */
  max-width: 340px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  background: #EB5160;
  color: #fff;
  cursor: pointer;
  margin-bottom: 60px;

  h1 {
    position: relative;
    padding: 190px 0px 100px 10px;
    width: 90%;
  }

  > img {
    width: 90%;
    position: absolute;
    top: -6%;
    left: -6%;
  }
`

const Border = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 6px;
  border: 1px solid #fff;
  opacity: 0.5;
  left: -6px;
  top: -6px;
`

interface ModalProps {
  isOpen: boolean
}

const Modal = styled.div<ModalProps>`
  position: absolute;
  background: #EB5160;
  z-index: 1000;
  transform-origin: 50% 50%;
  width: 100vw;
  height: 100vh;
  left: 0;
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  
  padding: 1.5rem;
`

const CloseAction = styled.div`
  display: inline-block;
  position: absolute;
  right: 1rem;
  top: 1rem;
  font-size: 2.5rem;
  cursor: pointer;
  width: auto;
  height: auto;
  line-height: 0px;

  /* &:hover{
      transition: all 600ms cubic-bezier(.99,0,.57,.94);
      transform: rotate(360deg);
    } */

  svg {
    color: #fff;
  }
`

const OpenContent = styled.div`
  width: 100%;
  z-index: 110;
  position: relative;
  pointer-events: none;
  padding: 2rem;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;

  .text {
    display: block;
  }

  .img-container {
    perspective: 2000px;

    img {
      transform: rotateY(-30deg) rotateX(5deg) translateX(-10%);;
    }
  }

  
  

  /* img {
    position: relative;
    width: 50%;
    margin-top: 8;
    z-index: 5;
    transform: rotateY(-30deg) rotateX(5deg) translateX(-50%);
  }

  .text {
    position: absolute;
    background: #fff;
    margin-top: -25%;
    padding: 40% 5% 5% 5%;
    width: 80%;
    height: calc(100% - 80px);
    margin-left: 5%;
    margin-bottom: 5%;
    overflow: scroll;
  } */
`

export default Card