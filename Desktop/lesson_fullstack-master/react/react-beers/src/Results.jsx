import React from "react";

const Results = ({beers}) => {
    return (
        // fragment
        <div>
           {beers.map(beer => <li>
               {beer.title} - {beer.pic}
           </li>)}
        </div>
    )
}

export default Results