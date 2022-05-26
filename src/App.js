import './App.css';
import React, {useState} from 'react';

function App() {  

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    // console.log(name, email, address);

    const DisplayInputData  = {name, email, address}

    if(name && email && address){
      setList((ls) => [...ls, DisplayInputData]);
      setName("");
      setEmail("");
      setAddress("");

    }
  }

  return (
    <div className="App">
      <div className="form">
        <form onSubmit={handleSubmit}>
        <h1>Add Users</h1>
        <label>
         <b> Name </b> 
        </label>
        <input
          type="text"
          placeholder='Enter Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          id="InputName"
        />
        <br></br>
           <label>
         <b>Email</b>  
        </label>
        <input
          type="text"
          placeholder='Enter Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          id="InputEmail"
        />
        <br></br>
           <label>
          <b>Address </b>
        </label>
        <textarea
          type="text"
          placeholder='Enter Address'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          name="address"
          id="InputAddress"
        />
        <button type='submit' className='btn'>Submit</button>
        </form>
      </div>

      <div className='Display-Users'>
    <h1>Display Users</h1>
    {
          list.map((a) => <div>
            <ul>
            <li><b><u>Name:-</u></b> {a.name}</li>
            <li><b><u>Email:-</u></b> {a.email}</li>
            <li><b><u>Address:-</u></b> {a.address}</li>
            </ul>
          </div>)
        }
    </div>

    </div> 
  );
}

export default App;
