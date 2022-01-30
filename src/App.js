import React from 'react'

function App() {
  const handleChnage = (e) => {
    console.log(e.target.files[0])
  }

  return (
    <div>
      <input type='file' name='file' placeholder='please upload your file' onChange={(event) => handleChnage(event)} />
    </div>
  )
}

export default App;

