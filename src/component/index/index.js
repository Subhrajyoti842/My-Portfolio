import React, { Component } from "react";
import Home from "../home/home";
import Work from "../work/work";
import Portfolio from "../portfolio/portfolio";
import ProfileA from "../profile/profile";
import About from "../socialmedia/socialmedia";
import Footer from "../footer/footer";

class Index extends Component{
    render(){
        return(
            <>
            <Home />
            <Work />
            <Portfolio />
            <ProfileA />
            <About />
            <Footer />
            </>
        )
    }
}

export default Index;