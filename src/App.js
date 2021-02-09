import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const [markdown, setMarkDown] = useState('## markdown preview')
  return <main>
    <section className="markdown">
      <textarea  className='input' value={markdown}
      onChange={(e) =>setMarkDown(e.target.value)}></textarea>
    </section>
    <article className="result">{markdown}</article>
  </main>
}

export default App
