import React, { useState } from 'react';
import SearchBar from './searchBar';
import './Properties.css';

export const Properties = () => {
    const [state, setState] = useState({
        id: '',
        title: '',
        location: '',
        price: '',
        poster: ''
    });

    const handleSubmit = e => {

        // e.preventDefault();
        // Make a POST request to the JSON server here
        
        fetch("http://localhost:4000/land", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(state)
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
                name="title"
                placeholder="Title"
                value={state.title}
                onChange={handleChange}
            />
            <input
                type="text"
                name="id"
                placeholder="Land Id"
                value={state.id}
                onChange={handleChange}
            />
            <input
                type="text"
                name="location"
                placeholder="Location"
                value={state.location}
                onChange={handleChange}
            />
            <input
                type="text"
                name="price"
                placeholder="Price"
                value={state.price}
                onChange={handleChange}
            />
            <input
                type="url"
                name="poster"
                placeholder="Image Url"
                value={state.poster}
                onChange={handleChange}
            />
            <button className ="btn" type="submit">Submit</button>

        </form>

        <SearchBar /> 
        </div>

        </div>
    );
};

export default Properties;