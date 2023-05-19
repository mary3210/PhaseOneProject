import React from "react";
import Title from "../components/Title";
export default function RandomizeColors() {
    function HandleClick () {
        console.log('click')
    }
  return (
    <div className="container m-auto text-center">
      <Title text={"Randomize Color"} classes={"mb-4"} />
      <button className="btn btn-danger" onClick={HandleClick}>Click me</button>
      <button className="btn btn-success">Click me</button>
      <button className="btn btn-primary">Click me</button>
      <button className="btn btn-warning">Click me</button>
    </div>
  );
}
