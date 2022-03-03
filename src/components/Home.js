import React from "react";
import styled from "styled-components"
import Section from "./section";

function Home(){
    return(
        <Container>
            <Section 
                title="Model S"
                description="Order online for touchless delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title="Model Y"
                description="Order online for touchless delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title="Model 3"
                description="Order online for touchless delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title="Model X"
                description="Order online for touchless delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title="Lowest cost Solar panels in America"
                description="Money-back guarantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn more"
            />
            <Section 
                title="Solar for New Roofs"
                description="Solar roofs cost less than a new roof plus solar panels"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn more"
            />
            <Section 
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtnText="Shop now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div `
    height: 100vh;
`