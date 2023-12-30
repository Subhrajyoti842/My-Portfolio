import React from "react";
import "./homeStyle.js"
import "./home.css"
import { HomeDiv, HomeInformation ,HomeTitle, HomeIinfo, HomeDesc, HomeBtn, Span} from "./homeStyle.js";

const Home = () =>{
    return(
        <HomeDiv className="test">
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Mohemed HM</HomeTitle>
                    <HomeIinfo>Creative Director</HomeIinfo>
                    <HomeDesc>
                        Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
        </HomeDiv>
    )
}
export default Home;