import { observer } from 'mobx-react-lite'
import React, { useCallback } from 'react'
import styled from 'styled-components'
import { Tab } from '.'
import { useStore } from '../utils'

const Tabs = [
  {
    label: "home",
    color: "#0277bd"
  },
  {
    label: "about",
    color: "#00838f"
  },
  {
    label: "projects",
    color: "#00695c"
  },
  {
    label: "skills",
    color: "#2e7d32"
  },
  {
    label: "contact",
    color: "#558b2f"
  }
]

export const TabMenu: React.VFC = observer(() => {

  const store = useStore()

  const handleOnSelect = useCallback((currentIndex: number) => {
    store.updateCurrentIndex(currentIndex)
  }, [store])

  return (
    <Nav>
      {
        Tabs.map((tab, index) => 
          <Tab 
            key={tab.label}
            label={tab.label} 
            color={tab.color} 
            index={index} 
            isSelected={index === store.currentIndex} 
            onClick={() => handleOnSelect(index)}
          />
        )
      }
    </Nav>
  )
})

const Nav = styled.div`
  display: flex;
  justify-content: flex-start;
  
`

export default TabMenu