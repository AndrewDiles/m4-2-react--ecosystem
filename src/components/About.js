import React from "react";
import styled from 'styled-components';

function About(props) {
    return <div>{
        <div>
            <StyledFlexDiv>
                <p>
                    Fruit emporium is founded on a very simple principle: 
                </p>
                <StyledBoldP>
                    Fruit is good.
                </StyledBoldP>
            </StyledFlexDiv>
            <p>
                We carry the finest selection of produce from around the world, from tart citrus to sweet cherries. Our sellers are world-class, and your fruit is guaranteed to be worthy of auction in Asian markets.
            </p>
        </div>
    }</div>
}
const StyledFlexDiv = styled('div')`
display: flex;
`
const StyledBoldP = styled('div')`
margin: 1em 0.5em;
font-weight: bold;
`

export default About;