import { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  const [apiUrl, setApiUrl] = useState('http://msevagintry-001-site1.atempurl.com/api/User/SaveUser')
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentFile, setCurrentFile] = useState(null);

  function saveClickHandler() {
    const formData = new FormData();
    formData.append('Id', 0);
    formData.append('FirstName', firstName);
    formData.append('LastName', lastName);
    formData.append('Email', email);
    formData.append('Password', password);
    formData.append('AvatarImg', currentFile);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };


    console.log(currentFile);
    axios.post(apiUrl, formData, config)
      .then(res => console.log(res));
  }

  function addNewFile(event) {
    setCurrentFile(event.target.files[0]);
  }

  return (
    <div className='container-sm mt-4'>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">First name: </span>
        <input type="text" className="form-control" placeholder="First name" aria-label="First name" aria-describedby="basic-addon1" 
        value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Last name: </span>
        <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" aria-describedby="basic-addon1" 
        value={lastName} onChange={(e) => setLastName(e.target.value)}/>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Email: </span>
        <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" 
        value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Password: </span>
        <input type="text" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" 
        value={password} onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Avatar image: </span>
        <input type="file" className="form-control" aria-label="File" aria-describedby="basic-addon1" 
        onChange={(e) => addNewFile(e)}/>
      </div>
      <button onClick={saveClickHandler} className='btn btn-primary btn-lg'>Save</button>
    </div>
  );
}

export default App;
