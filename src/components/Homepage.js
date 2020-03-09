import React from "react";

import ListingGrid from './ListingGrid';


import { items } from '../data'

function Homepage(props) {
    return <div id='main'>
        <h3>
            Fruit emporium sells the finest fruits from this world and beyond.
        </h3>
        <h4>
            Browse items:
        </h4>
            <ListingGrid
                itemList={items}
            />
    </div>
}



export default Homepage;