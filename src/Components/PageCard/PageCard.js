import React from "react";

import "./PageCard.css";

function PageCard({className, title, subtitle, content}){
    return(

            <div className="page-card">
                <h2>{title}</h2>
                <p><b>{subtitle}</b></p>
                <div className="content">{content}</div>
            </div>


    )
}

export default PageCard;