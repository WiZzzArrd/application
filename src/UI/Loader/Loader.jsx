import React from 'react';
import loader from "../../assets/loader/loader.gif";

const Loader = (props) => {
    return (
        <div>
            <img {...props} src={loader} alt="loading" className="loader"/>
        </div>
    );
};

export default Loader;