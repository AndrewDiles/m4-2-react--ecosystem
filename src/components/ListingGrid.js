import React from "react";
import styled from 'styled-components';

import { Link } from "react-router-dom";

import "./ListingGrid.css";

const ListingGrid = props => {
    // {console.log(Object.values(props.itemList));}
    return (
        <GridContainer>
                {Object.values(props.itemList).map(fruit => {
                    // console.log('inside fruit', fruit)
                    return (
                        <FruitLink key={fruit.id} fruitid={fruit.id} to={`/fruit/${fruit.id}`}>
                            <div className='fruitContainer'>
                                    <img className='fruitImage'src={fruit.imageSrc} alt={fruit.description}/>
                                    <p className='nameP'>
                                    {fruit.name}
                                    </p>
                                    <p className='latinP'>
                                        {fruit.latinName}
                                    </p>
                            </div>
                        </FruitLink>
                    )
                })}
        </GridContainer>
    );
};

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-content: center;
    text-align: center;
    grid-gap: 3%;
`
const FruitLink = styled(Link)`
    text-decoration: none;
    padding: 0 10px;
`;

// ListingGrid.propTypes = {
//     itemList: PropTypes.arrayOf(
//         PropTypes.shape({
//             name: PropTypes.string.isRequired,
//             latinName: PropTypes.string.isRequired,
//             imageSrc: PropTypes.string.isRequired,
//         })
//     ).isRequired,
// };

export default ListingGrid;