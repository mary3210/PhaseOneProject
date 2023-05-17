import React, {useState} from "react";
import Title from "../components/Title";

export default function EsignatureApp() {
    const [name, setName] = useState("Name");
    const [date, setDate] = useState("");
    const handleNameChange = (e) => {
        // console.log(e.target.value)
        setName(e.target.value)
    };
    const handleDateChange = (e) 
    const inputStyle = {
        border: "none",
        borderBottom: "2px, dotted",
        outline: "none",
        padding: ".35rem 0",
    };
    document.body.style.background= "#eee";
    return (
        <div className='container text-center'>
        <Title classes={"subtitles"} text={name}/>
        <Title classes={"main-title"} text={!date ? "04/12/2023" : date}/>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore veritatis odit eum ea magnam nemo asperiores inventore laudantium. Modi repellat eius labore fugit non numquam nihil in ratione molestiae et!</p>
       <footer className="d-flex" style={{justifyContent: "space-around", position: "relative",
    top:"40vh"}}>
        <input type="date" value={date} style={inputStyle} onChange={handleDateChange}/>
        <input type="text" value={name} style={inputStyle} onChange={handleNameChange}/>

       </footer>
        </div>
    )
}