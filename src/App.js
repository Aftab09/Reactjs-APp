import "./App.css";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Header from "./Header";
// import { DataGrid } from '@mui/x-data-grid';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {

    const dupEmail = list.filter(list => list.email !== email).length
    // console.log(dupEmail);
    // console.log(list.length);

    if (name !== "" && email !== "" && address !== "") {

    if (dupEmail === list.length && email !== "") {
      setList([...list, { name, email, address }]);
      setName("");
      setEmail("");
      setAddress("");
    }else{
      alert(`${email}, Email is already Exist.`);
    }
  
  }else{
    alert("Fill all fields");
  }

    e.preventDefault();
    // console.log(name, email, address);

    const DisplayInputData = {
      name,
      email,
      address,
    };

    // if (name && email && address) {
    //   setList((ls) => [...ls, DisplayInputData]);
    //   setName("");
    //   setEmail("");
    //   setAddress("");
    // } else {
    //   alert("Please fill All fields*");
    // }
  };

  // clear form data
  const handleClear = () => {
    setName("");
    setEmail("");
    setAddress("");
  };


  // Delete User
  const handleDelete = (index) => {
    setList([...list.slice(0, index), ...list.slice(index + 1)]);
  };

  // Edit User
  const handleEdit = (index) => {
    setName(list[index].name);
    setEmail(list[index].email);
    setAddress(list[index].address);
    setList([...list.slice(0, index), ...list.slice(index + 1)]);
  };


  return (
    <div className="App">
      <Header />
      <div className="card card-body">
        <form onSubmit={handleSubmit}>
          <h1><u>Add Users</u></h1>
          <label>
            <b> Name </b>
          </label>
          <input
            type="text"
            placeholder="Enter Name"
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
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="InputEmail"
          />
          <br></br>
          <label>
            <b>Address </b>
          </label>
          <input
            type="text"
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            name="address"
            id="InputAddress"
          />
          <Button type="submit" id="btn" className="btn" variant="outlined">
            Submit
          </Button>
          <div>  
         {/* <button onClick={showData}>Show</button> */}
          </div>
        </form>
      </div>
      <div className="Display-Users" id="users">
        <h1><u>Display Users</u></h1>
        <table border="1px solid black">
          <th id="name">Name</th>
          <th id="email">Email</th>
          <th id="address">Address</th>
          <th id="editDelete">Edit / Delete</th>
        </table>

        {list.map((item, i) => (
          <div>

            <table border="1px solid black">

              <tr className="list-group-item">
                <td id="name">{item.name}</td>
                <td id="email">{item.email}</td>
                <td id="address">{item.address}</td>
                <Button
                  id="btn2"
                  variant="outlined"
                  className="btn"
                  onClick={() => handleEdit(i)}
                >
                  Edit
                </Button>
                <Button
                  id="btn2"
                  variant="outlined"
                  className="btn"
                  onClick={() => handleDelete(i)}
                >
                  Delete
                </Button>
              </tr>
            </table>

          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
