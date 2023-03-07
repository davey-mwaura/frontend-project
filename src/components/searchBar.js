import React, { useState, useEffect } from 'react';

export const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [lands, setLands] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:9292/lands")
            .then(res => res.json())
            .then(data => setLands(data));
    }, []);

    useEffect(() => {
        const results = lands.filter(land =>
            land.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    }, [searchTerm, lands]);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    const handleDelete = id => {
        // Delete the land from the json-server
        fetch(`http://127.0.0.1:9292/${id}`, {
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
                    placeholder="Search by land name"
                    value={searchTerm}
                    onChange={handleChange}
                />
            </form>
            <div className="showLands">
                {searchResults.map(land => (
                    <div key={land.id} className="Card">
                        <ul className="cardlist">
                            <li className="first">ID: {land.id}</li>
                            <li className="second">Name: {land.name}</li>
                            <li className="third">Location: {land.location}</li>
                            <li className="fourth">Value: {land.value}</li>
                            <li className="fourth">User Id: {land.user_id}</li>
                        </ul>
                        <img className="landimage" src={land.image_url} alt={land.name} />
                        <button className="semi" onClick={() => handleDelete(land.id)}>Sell Land</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchBar;
