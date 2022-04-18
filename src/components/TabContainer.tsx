import { observer } from 'mobx-react-lite'
import React from 'react'
import styled from 'styled-components'
import { useStore } from '../utils'

interface TabContainerStyleProps {
  color: string
  index: number
}

interface TabContainerProps extends TabContainerStyleProps {
  label: string
}

export const TabContainer: React.FC<TabContainerProps> = observer(
  ({ color, children, index, label }) => {
    const store = useStore()

    return (
      <Container
        className={`tab-${index}`}
        color={color}
        index={index}
        isSelected={store.currentIndex === index}
      >
        <ContentContainer color={color} className='tab-container' index={index}>
          {children}
        </ContentContainer>
      </Container>
    )
  }
)

interface ContainerProps extends TabContainerStyleProps {
  isSelected: boolean
}

const Container = styled.div<ContainerProps>`
  position: absolute;
  z-index: ${(props) => (props.isSelected ? 50 : 20 - props.index)};
`

const ContentContainer = styled.div<TabContainerStyleProps>`
  /* width: ${(props) => `calc(100vw - 80px + ${props.index * 2}px)`}; */
  margin-top: 80px;
  height: calc(100vh - 80px);
  width: 100vw;
  box-shadow: 6px 2px 8px rgba(0, 0, 0, 0.2);
  background: ${(props) => props.color};
`

export default TabContainer
