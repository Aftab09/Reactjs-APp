import "./App.css";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name, email, address);

    const DisplayInputData = { name, email, address };

    if (name && email && address) {
      setList((ls) => [...ls, DisplayInputData]);
      setName("");
      setEmail("");
      setAddress("");
    }
  };


  // Delete User
  const handleDelete = (index) => {
    setList([
      ...list.slice(0, index),
      ...list.slice(index + 1)]);
  };


  // Edit User
  const handleEdit = (index) => {
    setName(list[index].name);
    setEmail(list[index].email);
    setAddress(list[index].address);
    setList([
      ...list.slice(0, index),
      ...list.slice(index + 1)]);
  };

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
          <textarea
            type="text"
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            name="address"
            id="InputAddress"
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>

      <div className="Display-Users">
        <h1>Display Users</h1>
        {list.map((item, i) => (
          <div>
            <ul className="list-group-item" key={i}>
              <li>Name: {item.name}</li>
              <li>Email: {item.email}</li>
              <li>Address: {item.address}</li>
              <button type="button" className="btn" onClick={() => handleEdit(i)}>
                Edit

              </button>
              <button
                type="button"
                className="btn"
                onClick={() => handleDelete(i)}
              >
                Delete
              </button>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
