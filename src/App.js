import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // You can implement the upload logic here
      console.log('Uploading:', selectedFile.name);
    } else {
      console.log('No file selected.');
    }
  };

  return (
    <div className="App">
        <div className='body'>    
    <nav className='Navbar' >
      <ul className='Navbar-content' >
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav></div>

        <div className='border-class' >
      <h1 className='Header' >Video Uploader</h1>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
    </div>
  );
}

export default App;
