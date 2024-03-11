import React from 'react'

const proj_comp = (props) => {
  return (
    <div>
        <span>Featured Project</span>
        <span>props.title</span>
        <p>props.desc</p>
        <ul>
         <li>props.tags[0]</li>
         <li>props.tag[1]</li>
         <li>props.tag[2]</li>
         <li>props.tag[3]</li>
         <li>props.tag[4]</li>
        </ul>
      
    </div>
  )
}

export default proj_comp