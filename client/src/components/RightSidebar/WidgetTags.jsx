import React from 'react'

const WidgetTags = () => {
    const tags= ['c', 'css',  'express', 'firebase', 'html', 'java', 'javascript','mern','mongodb','mysql','next.js','node.js','php','python','reactjs']

  return (
    <div className='widget-tags'>
        <h3>Watched tags</h3>
        <div className='widget-tags-div'>
            {
                tags.map((tags)=>(
                    <p key={tags}>{tags} </p>
                ))
            }
        </div>

    </div>
  )
}

export default WidgetTags 