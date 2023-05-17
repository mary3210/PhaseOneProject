import React from "react";
import Title from "../components/Title";
export default function EsignatureApp() {
    const inputStyle = {
        border: "none",
        borderBottom: "2px, dotted"
    };
    return (
        <div className='container text-center'>
        <Title classes={"subtitles"} text={"Name"}/>
        <Title classes={"main-title"} text={"Date"}/>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore veritatis odit eum ea magnam nemo asperiores inventore laudantium. Modi repellat eius labore fugit non numquam nihil in ratione molestiae et!</p>
       
        <input type="date" value={""} style={inputStyle}/>
        <input type="text" value={""} style={inputStyle}/>
        </div>
    )
}