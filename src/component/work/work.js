import React,{Component} from "react";
import axios from "axios";
import "./workStyle.js"
import { WorkDiv,WorkTitle,PartTitle,PartLine,PartDesc,Span,WorkIcon,WorkPart } from "./workStyle.js";

class Work extends Component {
    state = {
        works: []
    } 
     componentDidMount(){
         axios.get("js/data.json").then( res  =>{ this.setState({ works: res.data.works})})
     }

   render(){

        const {works} = this.state; 
        const worksList = works.map( (workItems) =>{
            return( 
                <WorkPart  first={workItems.id}  key={workItems.id}>
                <WorkIcon className={workItems.icon_name}></WorkIcon >
                <PartTitle>{workItems.title} </PartTitle>
                <PartLine />
                <PartDesc>{workItems.body}
                </PartDesc>
            </WorkPart>
            )
        })

        return(
        
        <WorkDiv> 
        <div className="container">
            <WorkTitle><Span>My</Span> Work</WorkTitle>
            {worksList}
        </div>
        </WorkDiv>


    )
   }
}
export default Work;