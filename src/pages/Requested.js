import React from 'react';
import Requestedcard from '../components/requestedcard';
import { useNavigate } from "react-router-dom";

const Requested = () => {
    const navigate = useNavigate();

    function clickHandler() {
        navigate("/newStory");
    }
    return (
        <div>{JSON.parse(localStorage.getItem('myblogs_Id')) ? (
            <div>
                {JSON.parse(localStorage.getItem('myblogs_Id')).map((number, i) =>
                    <Requestedcard key={i}
                        articleId={number} />
                )}
            </div>) : (
            <div>
                <h1>No Blogs</h1>
                <button onClick={clickHandler} > Create First Blog</button>
            </div>
        )}

        </div>
    );
};

export default Requested;