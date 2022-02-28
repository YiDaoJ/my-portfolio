import React, { useState } from 'react'
import styled from 'styled-components'
import { MdOutlineClose } from 'react-icons/md'
import clsx from 'clsx'


interface CardProps {
  title: string
  imgURL: string
  color: string
}

export const Card:React.VFC<CardProps> = ({title, imgURL, color}) => {

  const [ openContent, setOpenContent ] = useState<boolean>(false)
  const [ isClicked, setIsClicked] = useState<boolean>(false)

  const handleOpenModal = () => {
    setIsClicked(true)
      setOpenContent(true)
  }

  const handleCloseModal = () => {
    setIsClicked(false)
    setOpenContent(false)
  }
   

  return (
    <>
    <StyledCard className={clsx({clicked: isClicked})} onClick={handleOpenModal} color={color}>
      <Border className='border' />
      <ImageContainer>
        <img src={imgURL} alt={title} />
      </ImageContainer>
      <Title className='title'>{title}</Title>
    </StyledCard>

    <Modal className={clsx(['modal', {'open': openContent}])} isOpen={openContent} color={color}>
      <CloseAction onClick={handleCloseModal} className="close-content">
        <MdOutlineClose  />
      </CloseAction>
      <OpenContent className='open-content'>
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



const StyledCard = styled.div<{color: string}>`
  width: 340px;
  height: 360px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  background: ${props => props.color};
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 200ms linear, transform 200ms ease-out 120ms;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }


  &.clicked {
    opacity: 0;
    transform: translate3d(0px, -100px, 0px);

    img {
      opacity: 0;
      transform: translate3d(0px, -40px, 0px);
    }

    .border {
      opacity: 0;
      transform: scale(1.3);
    }
  }

  &:hover {
    .border{
      transform: skew(8deg);
    }
  }
`

const ImageContainer = styled.div`
  width: 90%;
  height: 200px;
  position: absolute;
  top: -6%;
  left: -6%;
  transition: opacity 200ms linear 0ms, transform 200ms ease-in 0ms;
  object-fit: contain;
`

const Title = styled.div`
  transform: translate3d(20%, 0px, 0px);  
  transition: opacity 200ms linear 120ms, transform 200ms ease-in 120ms;
  font-size: 2rem;
  margin-bottom: -10rem;
  font-weight: 500;
  line-height: 150%;
`

const Border = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 6px;
  border: 2px solid #fff;
  opacity: 0.5;
  left: -10px;
  top: -10px;
  border-radius: 15px;

  transition: opacity 200ms linear, transform 200ms ease-out;
`

interface ModalProps {
  isOpen: boolean,
  color: string
}

const Modal = styled.div<ModalProps>`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 100vh;
  left: 0;
  transition: all 300ms ease-in-out;
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  z-index: 1000;

  &.open {
    background: ${props => props.color};
    z-index: 1000;
    transform-origin: bottom;
    top: 0;
    left: 0;
    padding: 1.5rem;
    transition: all 300ms ease-in-out;
  }

  
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
  transition: opacity 200ms linear 0ms;

  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: justify;
    width: 50%;
    height: 100%;
    color: #f0efeb;
    font-size: 1rem;
    line-height: 150%;
  }

  .img-container {
    perspective: 2000px;
    width: 50%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transform: rotateY(-30deg) rotateX(5deg) translateX(-10%);;
    }
  }
`

export default Card