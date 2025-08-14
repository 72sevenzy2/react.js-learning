import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Home from "./home";

function UserProfs() {
    const { usernames } = useParams();
    const navigate = useNavigate();

    return (
        <>
            <h1>YOur viewing {usernames}</h1>
            <button onClick={() => {navigate(-1)}}>back</button>
        </>
    )
}

export default UserProfs;