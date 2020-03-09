import React from "react";

import styled from 'styled-components';

import Vendor from "./Vendor";

import { useParams } from 'react-router-dom';

import { items } from '../data'
import { sellers } from '../data'

function ItemDetails() {
    const { fruitid } = useParams();
    // console.log('fruitid', fruitid);
    // console.log('sellers', {sellers});

    const fruitId = Object.keys(items).find(fruit => fruit === fruitid);
    
    console.log(items[fruitId].quantity);
    let vendor = sellers[items[fruitId].sellerId];
    // console.log(vendor);
    
    // console.log('Item Details', fruit);
    return <FruitDisplay>
        <StyledFruitImage src={items[fruitId].imageSrc} alt={items[fruitId].description}/>
        <StyledFruitInfo>
            <StyledName> {items[fruitId].name} </StyledName>
            <StyledLatin> {items[fruitId].latinName} </StyledLatin>
            <div>
                <StyledP className='descriptionP'>
                    {items[fruitId].description}
                </StyledP>
                <StyledProductOfDiv>
                    <StyledProductOfP>
                        Product of  
                    </StyledProductOfP>
                    <StyledProductLocation>
                        {` ${items[fruitId].countryOfOrigin}`}
                    </StyledProductLocation>
                </StyledProductOfDiv>
            </div>
            {items[fruitId].quantity >0 ?
            <PurchaseButton>
                ${items[fruitId].price} - Buy now
            </PurchaseButton>
            :
            <PurchaseButton className = 'OoS' disabled>
                Out of Stock
            </PurchaseButton>
            }
            <Vendor
                vendor= {vendor}
            />
        </StyledFruitInfo>
    </FruitDisplay>
}
const FruitDisplay = styled('div')`
    display: flex;
    padding: 0 7%;
    height: 300px;
`;

const StyledFruitImage = styled('img')`
    height: 100%;
    width: auto;
    border-radius: 20px;
`;
const StyledFruitInfo = styled('div')`
    margin-left: 10%;
    display: flex;
    flex-direction: column;
    height: 600px;
    width: 600px;
`;
const StyledName = styled('p')`
    font-size: 1.8em;
    font-weight: 900;
    margin: 0;
`;
const StyledLatin = styled('p')`
    font-style: italic;
    font-size: 1.2em;
    color: gray;
    margin: 0;
`;
const StyledProductOfDiv = styled('div')`
    display: flex;
`
const StyledProductOfP = styled('p')`
    font-style: italic;
    font-size: 1.2em;
    /* color: gray; */
`
const StyledProductLocation = styled('p')`
    font-weight: bold;
    font-size: 1.2em;
    margin-left: 10px;
`
const StyledP = styled('p')`
    margin-bottom: 0;
`
const PurchaseButton = styled('button')`
color: white;
background-color: blueviolet;
border-radius: 10px;
height: 50px;
width: 300px;
font-size: 1.2em;
&& .OoS {
    background-color: red;
    cursor: not-allowed;
}
`

export default ItemDetails;