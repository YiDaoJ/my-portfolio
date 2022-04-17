import React from 'react'
import TabMenu from './TabMenu'

export const Layout: React.FC = ({children}) => {
  return (
    <div className='layout'>
      <TabMenu />
      <div>
        {children}
      </div>
    </div>
  )
}

