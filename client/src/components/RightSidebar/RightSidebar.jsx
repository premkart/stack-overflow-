import React from 'react'
import'./RightSidebar.css'
import Widget from'./Widget'
import WidegetTags from './WidgetTags'

const RightSidebar = () => {
  return (
    <aside className='right-sidebar'>
      <Widget />
      <WidegetTags />
    </aside>
  )
}

export default RightSidebar