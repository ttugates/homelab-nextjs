import React from 'react'
import 'github-markdown-css'
import ReactMarkdown from 'react-markdown';
 
const page = async () => {

  const res = await fetch('https://raw.githubusercontent.com/ttugates/homelab-nextjs/refs/heads/main/README.md')
  const markdown = await res.text();  

  return (
    <div className='markdown-body'>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  )
}

export default page