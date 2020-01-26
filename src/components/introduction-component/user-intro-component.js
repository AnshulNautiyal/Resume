import React, { useState } from "react";
import profile from "./../../image/anshul.jpg";
import camera from "./../../image/camera.png";

const inputRef = React.createRef();
const textRef = React.createRef();

const editField = viceVersa => () => {
  if (viceVersa) {
    inputRef.current.style.display = "block";
    inputRef.current.focus();
    textRef.current.style.display = "none";
  } else {
    inputRef.current.style.display = "none";
    textRef.current.style.display = "block";
  }
};

const handleUserNameEdit = setUserName => event => {
  const { keyCode = "" } = event;
  keyCode === 13 ? editField()() : setUserName(event.target.value);
};
export const Name = props => {
  const { className = "", name = "" } = props;
  const [userName, setUserName] = useState(name);

  return (
    <div className={className}>
      <h1 ref={textRef} onClick={editField(true)}>
        {userName ? userName : name}
      </h1>
      <input
        type="text"
        ref={inputRef}
        onBlur={editField(false)}
        onKeyUp={handleUserNameEdit(setUserName)}
      />
    </div>
  );
};

export const Designation = props => (
  <h2 className={props.className}>{props.designation}</h2>
);

export const IntroSummary = props => (
  <p className={props.className}>{props.summary}</p>
);

const changeImage = setUserImage => event => {
  const file = event.target.files[0];
  let reader = new FileReader();
  file && reader.readAsDataURL(file);
  reader.onloadend = function(e) {
    setUserImage(reader.result);
  };
};
export const UserProfile = props => {
  const { backgroundDarkColor = "", className = "" } = props;
  const [userImage, setUserImage] = useState(profile);
  return (
    <div className={className} style={{ borderColor: backgroundDarkColor }}>
      <img src={userImage} alt="User-Profile-img" />
      <div className="image-overlay">
        <input
          type="file"
          onChange={changeImage(setUserImage)}
          accept="image/*"
        />
        <img src={camera} alt="User-Profile-Placeholder" />
      </div>
    </div>
  );
};
