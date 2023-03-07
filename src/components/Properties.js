import React, { useState, useEffect } from 'react';
import SearchBar from './searchBar';
import './Properties.css';

export const Properties = () => {
  const [state, setState] = useState({
    // id: '',
    name: '',
    location: '',
    value: '',
    image_url: '',
    user_id: ''
  });

  const [lands, setLands] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:9292/lands")
      .then(res => res.json())
      .then(data => setLands(data))
      .catch(error => console.log(error));
  }, []);

  const handleSubmit = e => {
    // e.preventDefault();
    
    fetch("http://127.0.0.1:9292/lands", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(state)
    })
      .then(res => res.json())
      .then(newLand => {
        setLands([...lands, newLand]);
        setState({
          // id: '',
          name: '',
          location: '',
          value: '',
          image_url: '',
          user_id: ''
        });
      });
  };

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <div className="properties">
        <h1 className="headerland">Real Estate Property Manager</h1>

        <form className="firstform" onSubmit={handleSubmit}>
          <h2 className="info">Enter Information Here</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={state.name}
            onChange={handleChange}
          />
          {/* <input
            type="text"
            name="id"
            placeholder="Land Id"
            value={state.id}
            onChange={handleChange}
          /> */}
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={state.location}
            onChange={handleChange}
          />
          <input
            type="text"
            name="value"
            placeholder="Value"
            value={state.value}
            onChange={handleChange}
          />
          <input
            type="url"
            name="image_url"
            placeholder="Image Url"
            value={state.image_url}
            onChange={handleChange}
          />
          <input
            type="text"
            name="user_id"
            placeholder="User Id"
            value={state.user_id}
            onChange={handleChange}
          />
          
          <button className="btn" type="submit">Submit</button>
        </form>

        <SearchBar lands={lands} setLands={setLands} />
      </div>
    </div>
  );
};

export default Properties;
