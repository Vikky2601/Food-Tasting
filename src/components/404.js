import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => {
    return (
        <div className="HOME">
            <div class="container">
                <div className="error-box box-shadow">
                    <h1>404 ! </h1>
                    <p>The Page You Are Requested Couldn't Found</p><br />
                    <Link to="/">Go Back</Link>
                </div>
            </div>
        </div>
    )
}

export default NoMatch;