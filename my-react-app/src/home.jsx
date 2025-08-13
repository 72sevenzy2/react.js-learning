import React from "react";
import { Link } from "react-router-dom";

function Home() {


    return <>
        <h1>
            Hello please view any of the 3 users
        </h1>
        <ul>
            <li><Link to="/users/alex">ALEX</Link></li>
            <li><Link to="/users/bob">BOb</Link></li>
            <li><Link to="/users/max">MAX</Link></li>
        </ul>
    </ >
}

export default Home;