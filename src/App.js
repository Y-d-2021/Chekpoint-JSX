import React from "react";
import "./App.css";
import amazonImage from "./Assets/amazon.jpg"

function App() {
  const name = "Youssef dabaki";
  const myStyle = {
    color: "blue",
  };

  return (
    
    <div className="App">
     
      <p style={{ color: "red", margin: "0 30%", backgroundColor: "black" }}>
        {name}
      </p>
      <p style={myStyle}>{2 * 5}</p>

      <hr style={{ width: "50%" }} />

      <img
        className="react-logo"
        src="https://assets.turbologo.com/blog/fr/2019/09/19134223/amazon-logo-illustration-958x575.png"
        alt="logo react"
      />
     
      <br />
      
      <img src="amazon.png" alt="" style={{ width: "30%" }} />
      <br />
      <br />
      <br />
      <img src={amazonImage} alt="" style={{ width: "30%" }} />
      
      <p onClick={() => alert("hello")} className="test-paragraph">
        Hello Mon prof Bilel
      </p>
     
      <h2>{true ? "Hi" : "Bye"}</h2>
    
      {true && (
        <button>enter your name</button>
      )}
      <video>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/es4x5R-rV9s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     </video>
     
    </div>
  );
};  

export default App;
