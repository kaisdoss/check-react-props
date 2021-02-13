import React from "react";
import PropTypes from "prop-types";

function ProfileComponent(props) {
  console.log(props);

  const styleFullName = {
    color: "red",
    textAlign: "center",
    fontFamily: "TimesNewRoman",
    

  };
  const styleBioAndprof = { border: "2px solid" };

  return (
    <div>
      <h1 style={styleFullName}> Full Name: {props.FullName} </h1>
      <h1 style={{color:'green'}}> Bio:{props.bio}</h1>
      <h1 style={{color:'green'}} > prof: {props.profession}</h1>

      <div>{props.children}</div>
      <button style={{color:'blue', backgroundColor:'yellow',marginLeft:600}}
        onClick={() => props.alertName(`My name is ${props.FullName}`)}
      >
        Profile Name
      </button>
    </div>
  );
}

ProfileComponent.propTypes = {
  FullName: PropTypes.string,
  Bio: PropTypes.string,
  profession: PropTypes.string,
};

export default ProfileComponent;
