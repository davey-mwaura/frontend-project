import React, { useState, useEffect } from 'react';


export const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [lands, setLands] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/land")
            .then(res => res.json())
            .then(data => setLands(data));
    }, []);

    useEffect(() => {
        const results = lands.filter(land =>
            land.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    }, [searchTerm, lands]);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    const handleDelete = id => {
        // Delete the land from the json-server
        fetch(`http://localhost:4000/land/${id}`, {
            method: "DELETE"
        });
        // Remove the deleted land from the state
        setLands(lands.filter(land => land.id !== id));
    }

    return (
        <div className="allLands">
            <h3 className="newHead">Available Lands</h3>
            <form>
                <input
                    type="text"
                    placeholder="Search by land title"
                    value={searchTerm}
                    onChange={handleChange}
                />
            </form>
            <div className="showLands">
                {searchResults.map(land => (
                    
                    <div key={land.id} className="Card">
                        <ul className="cardlist">
                            <li className="first">ID: {land.id}</li>
                            <li className="second">Land: {land.title}</li>
                            <li className="third">Location: {land.location}</li>
                            <li className="fourth">Price: {land.price}</li>
                        </ul>
                        <img className="landimage" src={land.poster} alt={land.title} />
                        <button className="semi" onClick={() => handleDelete(land.id)}>Sell Land</button>
                    </div>
                ))}
            </div>
           
        </div>
    );
};

export default SearchBar;