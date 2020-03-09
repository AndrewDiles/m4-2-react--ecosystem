import React from "react";

// import { Link } from "react-router-dom";
import styled from 'styled-components';
// const styledLink = styled.a`
//     text-decoration: none;
//     padding: 0 10px;
// `


function Vendor(props) {
  console.log('props.vendor', props.vendor);
  return <VendorDiv>{<StyledVendorInfo>
    <StyledVendorImg src={props.vendor.avatarSrc} alt={props.vendor.description}/>
      <StyledVendorInfoLeft>
        Sold by:
      </StyledVendorInfoLeft>
      <StyledVendorInfoRight>
        {props.vendor.storeName}
      </StyledVendorInfoRight>
    </StyledVendorInfo>
  }</VendorDiv>

}
const VendorDiv = styled('div')`
  margin-top: 15px;
`
const StyledVendorImg = styled('img')`
height: 50px;
border-radius: 50%;
`
const StyledVendorInfo = styled('div')`
display: flex;
`
const StyledVendorInfoLeft = styled('p')`
margin-left: 15px;
`
const StyledVendorInfoRight = styled('p')`
font-weight: bold;
margin-left: 7px;
`

export default Vendor;