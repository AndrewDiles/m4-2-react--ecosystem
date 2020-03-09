import React from "react";

import "./Links.css";

function Links(props) {
    return <div className='linkWrapper'>
        {/* {console.log(props)} */}
        <a className='headerLinks' href={props.linkAddress}>{props.linkTitle}</a>
    </div>
}

export default Links;